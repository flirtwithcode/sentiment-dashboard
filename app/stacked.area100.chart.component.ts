import { Component } from '@angular/core';

@Component({
  selector: 'area-chart1',
  templateUrl: 'chart.component.html',
})
export class StackedArea100ChartComponent {
	addSymbols = (e: any) => {
		var suffixes = ["", "K", "M", "B"];
   
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)),0);
		if(order > suffixes.length - 1)
		  order = suffixes.length - 1;
   
		var suffix = suffixes[order];
		return (e.value / Math.pow(1000, order) + suffix);
	  }
	chartOptions = {
		animationEnabled: true,
		title:{
		  text: "Overall journey Sentiment."
		},
		exportEnabled: true,
		axisY: {
			title: "",
			valueFormatString: "#0,,.",
			suffix: "",
			includeZero: true,
		  labelFormatter: this.addSymbols
		  },
		axisX: {
			title: "",
			interval: 10,
			minimum: 0,
			includeZero: true,
		labelFormatter: this.addSymbols
		},
		toolTip:{
		  shared: false
		},
		data: [{
		  type: "splineArea",
		  name: "Happy",
		  showInLegend: "true",
		  color: "#ccffcc",
		  toolTipContent: "{label}<br/><span style='\"'color:{color}'\"'></span>{y} ",
		  dataPoints: [
			{ y: 0 , label: "" },
			{ y: 3 , label: "Enrollment" },
			{ y: 1.8, label: "Request Submission" },
			{ y: 1.2, label: "Payment processing" },
			{ y: 2, label: "Completion" },
			{ y: 0 , label: "" },
		  ]
		},{
		  type: "splineArea",
		  name: "Neutral",
		  showInLegend: "false",
		  color: "#ffffcc",		  
		  dataPoints: [
			{ y: 0 , label: "" },
			{ y: 2 , label: "Enrollment" },
			{ y: 0.6, label: "Request Submission" },
			{ y: 0.433, label: "Payment processing" },
			{ y: 0.66, label: "Completion" },
			{ y: 0 , label: ""},
		  ]
		},{
		  type: "splineArea",
		  name: "Sad",
		  showInLegend: "false",
		  color: "#fff2e6",		  
		  dataPoints: [
			{ y: 0 , label: "" },
			{ y: 1 , label: "Enrollment" },
			{ y: 0.6, label: "Request Submission" },
			{ y: 0.433, label: "Payment processing" },
			{ y: 0.66, label: "Completion" },
			{ y: 0 , label: "" },
		  ]
		}]
	}		
}
