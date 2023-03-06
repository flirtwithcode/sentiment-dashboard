import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-header',
  template: `<div class='row' style='align-items: center;'>
    <div class='col-md-3' style='color:#1277A3; align-items: center;'>Enrollment</div>

    <div class='col-md-3' style='color:#F7A444;'>Request Submission</div>

    <div class='col-md-3' style='color:#7C1CC8;'>Payment Processing</div>

    <div class='col-md-3' style='color:#D18BF2;'>Completion1</div>
  </div>`,
  styles: [
    `
    .row{
      font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
    }
  `,
  ],
})
export class ChartHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
