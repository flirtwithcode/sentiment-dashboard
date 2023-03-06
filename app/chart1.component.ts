import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartDataSets, ChartOptions, Chart } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'chart1',
  //template: `<h1>Hello {{name}}!</h1>`,
  templateUrl: './chart1.component.html',
  styles: [
    `h1 { font-family: 'RobotoRegular', Helvetica, Arial, sans-serif; }
    .hide-pan .canvasjs-chart-toolbar > button:first-child {
      display: none !important;
    }
    `,
  ],
})
export class Chart1Component {
  @ViewChild('myCanvas') canvas: ElementRef;

  ngOnInit() {
    this.configureTooltipBehavior();
    const gradient = this.canvas.nativeElement
      .getContext('2d')
      .createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, '#E2F8B5');
    gradient.addColorStop(1, '#FFE9E9');
    this.lineChartColors = [
      {
        backgroundColor: gradient,
      },
    ];
  }

  configureTooltipBehavior() {
    Chart.plugins.register({
      beforeRender: function (chart) {
        if (!chart.config.options.showAllTooltips) {
          // create an array of tooltips
          // we can't use the chart tooltip because there is only one tooltip per chart
          chart.pluginTooltips = [];
          chart.config.data.datasets.forEach(function (dataset, i) {
            chart.getDatasetMeta(i).data.forEach(function (sector, j) {
              chart.pluginTooltips.push(
                new Chart.Tooltip(
                  {
                    _chart: chart.chart,
                    _chartInstance: chart,
                    _data: chart.data,
                    _options: chart.options.tooltips,
                    _active: [sector],
                  },
                  chart
                )
              );
            });
          });

          // turn off normal tooltips
          chart.options.tooltips.enabled = false;
        }
      },
      afterDraw: function (chart, easing) {
        if (!chart.config.options.showAllTooltips) {
          // we don't want the permanent tooltips to animate, so don't do anything till the animation runs atleast once
          if (!chart.allTooltipsOnce) {
            if (easing !== 1) return;
            chart.allTooltipsOnce = true;
          }

          // turn on tooltips
          chart.options.tooltips.enabled = false;
          Chart.helpers.each(chart.pluginTooltips, function (tooltip) {
            tooltip.initialize();
            tooltip.update(true);
            // we don't actually need this since we are not animating tooltips
            tooltip.pivot();
            tooltip.transition(easing).draw();
          });
          chart.options.tooltips.enabled = false;
        }
      },
    });
  }

  public lineChartData: ChartDataSets[] = [
    {
      data: [{ y: 0 }, { y: 3 }, { y: 1.8 }, { y: 1.3 }, { y: 2.0 }, { y: 0 }],
      label: '',
    },
  ];
  public lineChartLabels: Label[] = ['', '', '', '', '', ''];
  public lineChartOptions: ChartOptions & { annotation: any } = {
    responsive: true,
    showAllTooltips: false,
    tooltips: {
      // Disable the on-canvas tooltip
      enabled: false,

      custom: function (tooltipModel) {
        let index = tooltipModel.dataPoints[0].index;
        let label = tooltipModel.dataPoints[0].yLabel;
        let htmlDom = document.getElementById('chart1' + index);
        let id = 'chart1' + index;
        if (htmlDom == null) {
          // Tooltip Element
          const toolTips = [
            '',
            `<div style='margin-top:-45px;margin-left:-50px;color:#1277A3'>Enrollment</div><br/></div><br/><div style=' height:30px;width: 30px;color: #000;padding: 10px;margin-top:-110%'>3</div>`,

            `<div style='margin-top:-130px;margin-left:-35px;color:#F7A444;z-index:-1;'>Request Submission<div style='margin-top:-10px; margin-left:35px;width:155px; height: 20px;'></div></div><br/><div style='margin-top:10px; margin-left:65px;width:155px; height: 20px;'></div></div><br/><div style=' height:30px;width: 30px;color: #000;padding: 10px;'>1.8</div>`,

            `<div style='margin-top:-165px;color:#7C1CC8;margin-left:-20px;'>Payment Processing</div><br/><br/><div style=' height:30px;width: 30px;color: #000;padding: 10px;margin-top:80%'>1.3</div>`,

            `<div style='margin-top:-115px;color:#D18BF2;margin-left:20px;'>Completion</div><br/></div></div><br/><div style=' height:30px;width: 30px;color: #000;padding: 10px;;margin-top:30%'>2.0</div>`,
            ``,
          ];
          var tooltipEl = document.getElementById('chartjs-label');

          // if (tooltipModel.dataPounts) {

          console.log(label);
          // }
          const content = toolTips[index];
          // Create element on first render
          if (!tooltipEl) {
            tooltipEl = document.createElement('div');
            tooltipEl.id = 'chartjs-tooltip';
            tooltipEl.innerHTML = '<table id=' + id + '></table>';
            document
              .getElementsByTagName('kendo-pdf-export')[0]
              .appendChild(tooltipEl);
          }

          // Hide if no tooltip
          if (tooltipModel.opacity === 0) {
            tooltipEl.style.opacity = '0';
            return;
          }

          // Set caret Position
          tooltipEl.classList.remove('above', 'below', 'no-transform');
          if (tooltipModel.yAlign) {
            tooltipEl.classList.add(tooltipModel.yAlign);
          } else {
            tooltipEl.classList.add('no-transform');
          }

          function getBody(bodyItem) {
            return bodyItem.lines;
          }

          // Set Text
          if (tooltipModel.body) {
            var titleLines = tooltipModel.title || [];
            var bodyLines = tooltipModel.body.map(getBody);

            var innerHtml = '<thead>';
            var colors = [
              '#5aa0be',
              '#f8b364',
              '#f8b364',
              '#ae74de',
              '#a825ec',
            ];
            titleLines.forEach(function (title) {
              innerHtml +=
                '<tr><th style="color:' +
                colors[index - 1] +
                ';">' +
                title +
                '</th></tr>';
            });
            innerHtml += '</thead><tbody>';

            // var colors = tooltipModel.labelColors[i];
            // var style = 'background:' + colors.backgroundColor;
            // style += '; border-color: blue';
            // style += '; border-width: 2px';
            // var span = '<span style="' + style + '"></span>';
            if (index < 6) {
              innerHtml += '<tr><td>' + toolTips[index];
              innerHtml +=
                `<br/><div style='height:80px;width: 150px;background-color: #C8F8FE;color: #000;padding: 10px;>` +
                label +
                `</div>`;
              innerHtml += '</td></tr>';
              innerHtml += '</tbody>';

              var tableRoot = tooltipEl.querySelector('table');
              tableRoot.innerHTML = innerHtml;
            }
          }

          // `this` will be the overall tooltip
          var position = this._chart.canvas.getBoundingClientRect();

          // Display, position, and set styles for font
          tooltipEl.style.opacity = '1';
          tooltipEl.style.position = 'absolute';
          tooltipEl.style.left =
            position.left + window.pageXOffset + tooltipModel.caretX + 'px';
          tooltipEl.style.top =
            position.top + window.pageYOffset + tooltipModel.caretY + 'px';
          tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
          tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
          tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
          tooltipEl.style.padding =
            tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
          tooltipEl.style.pointerEvents = 'none';
        }
      },
    },
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
}
