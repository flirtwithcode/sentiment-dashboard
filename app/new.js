// ============================================
// As of Chart.js v2.5.0
// http://www.chartjs.org/docs
// ============================================

var chart = document.getElementById('chart').getContext('2d'),
  gradient = chart.createLinearGradient(0, 0, 0, 550);

gradient.addColorStop(0.4, 'rgba(241, 192,148, 0.5)');
gradient.addColorStop(0, 'rgba(212, 231, 155, 0.25)');
gradient.addColorStop(0, 'rgba(211, 236, 128, 1)');

var data = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'Sep',
    'Oct',
    'Nov',
  ],
  datasets: [
    {
      label: 'Custom Label Name',
      backgroundColor: gradient,
      pointBackgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#911215',
      data: [50, 55, 80, 81, 54, 50, 0, 30, 50, 30],
    },
  ],
};

var options = {
  responsive: true,
  maintainAspectRatio: true,
  animation: {
    easing: 'easeInOutQuad',
    duration: 520,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'rgba(200, 200, 200, 0.05)',
          lineWidth: 1,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          color: 'rgba(200, 200, 200, 0.08)',
          lineWidth: 1,
        },
      },
    ],
  },
  elements: {
    line: {
      tension: 0.4,
    },
  },
  legend: {
    display: false,
  },
  point: {
    backgroundColor: 'white',
  },
  tooltips: {
    titleFontFamily: 'Open Sans',
    backgroundColor: 'rgba(0,0,0,0.3)',
    titleFontColor: 'red',
    caretSize: 5,
    cornerRadius: 2,
    xPadding: 10,
    yPadding: 10,
  },
};

var chartInstance = new Chart(chart, {
  type: 'line',
  data: data,
  options: options,
});
