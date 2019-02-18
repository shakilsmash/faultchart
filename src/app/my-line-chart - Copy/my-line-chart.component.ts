import { Component } from '@angular/core';
import { PluginHoverline } from './plugin-hoverline';
 
@Component({
  selector: 'line-chart-demo',
  templateUrl: './my-line-chart.component.html'
})
export class MyLineChartComponent {
  // lineChart
  public lineChartData:Array<any> = [
    {data: [, , 1, 1, , , ], label: 'Faults'},
  ];
  public lineChartLabels:Array<any> = ['12AM', '1AM', , , '4AM', '5AM', '6AM'];
  public lineChartOptions:any = {
    responsive: true,
    scales: { yAxes: [{ display: false }] },
    lineOnHover: {
      enabled: true,
      lineColor: '#bbb',
      lineWidth: 1
   }

  };
  public lineChartColors:Array<any> = [
    { // grey
      // backgroundColor: 'rgba(148,159,177,0.2)',
      backgroundColor: 'rgba(255,255,255,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  // public randomize():void {
  //   let _lineChartData:Array<any> = new Array(this.lineChartData.length);
  //   for (let i = 0; i < this.lineChartData.length; i++) {
  //     _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
  //     for (let j = 0; j < this.lineChartData[i].data.length; j++) {
  //       _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
  //     }
  //   }
  //   this.lineChartData = _lineChartData;
  // }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}