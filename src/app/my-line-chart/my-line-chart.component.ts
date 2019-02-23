import { Component } from '@angular/core';
import { PluginHoverline } from './plugin-hoverline';
import { getLocaleNumberSymbol } from '@angular/common';
 
@Component({
  selector: 'line-chart-demo',
  templateUrl: './my-line-chart.component.html'
})
export class MyLineChartComponent {
  // lineChart
  public lineChartData:Array<any> = [
    {data: [, , 1, 1, , 1, 1 ], label: 'Faults'},
    
  ];
  public lineChartLabels:Array<any> = ['12AM', '1AM', 'test', 'lol', '4AM', '5AM', '6AM'];
  public lineChartOptions:any = {
    responsive: true,
    showXLabels: false,
    
    scales: { yAxes: [{ display: false }], xAxes:[{display: true, ticks: {
      //X-axes display control:v
      
      callback: function(dataLabel, index) {
        return index % 2 === 0 ? dataLabel : null;
      }
    }}] },
    lineOnHover: {
      enabled: true,
      //lineColor: '#bbb',
      lineColor: 'white',
      lineWidth: 1
   },
   hover: {
    mode: 'nearest',
    intersect: true
  },
  
  tooltips: {
    mode: 'index',
    intersect: false,
    enabled: false,
  //   callbacks: {
  //     label: function(tooltipItem, data) {
  //         var label = '     <h2>Start:&#013;&#010;' + ['new line'+ 'another line'];
  //         if (label) {
  //             label += ':: ';
  //         }
  //         label += Math.round(tooltipItem.yLabel * 100) / 100 + '</h2>';
  //         return label;
  //     }
    
  // }
  custom: function(tooltipModel) {
    // Tooltip Element
    var tooltipEl = document.getElementById('chartjs-tooltip');

    // Create element on first render
    if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.id = 'chartjs-tooltip';
        tooltipEl.innerHTML = "<table></table>";
        document.body.appendChild(tooltipEl);
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
        var innerHtml = '<thead>'
        titleLines.forEach(function(title) {
          innerHtml += '<tr><th>' + title + 'Works</th></tr>';
      });
        // var innerHtml = '<tbody>' +
        //                     '<tr><td>Start:</td><td bgcolor="#bababa"> Sun 1 Jul 2018 18:26:18 GMD+8</td></tr>' + 
        //                     '<tr><td>End:</td><td> Sun 1 Jul 2018 18:32:03 GMD+8</td></tr>' + 
        //                     '<tr><td>Length:</td><td>00:05:45</td></tr>' + 
        //                     '<tr><td>Keywords:</td><td>works, yay, best</td></tr>'
        //                 ;

        innerHtml += '</thead><tbody>';
        bodyLines.forEach(function(body, i) {
            var colors = tooltipModel.labelColors[i];
            var style = 'background:' + colors.backgroundColor;
            style += '; border-color:' + colors.borderColor;
            style += '; border-width: 2px';
            var span = '<span style="' + style + '"></span>';
            
            innerHtml += '<tr><td>' + span + '' + body + '</td></tr>';
          
        });


        // bodyLines.forEach(function(body, i) {
        //     var colors = tooltipModel.labelColors[i];
        //     var style = 'background:' + colors.backgroundColor;
        //     style += '; border-color:' + colors.borderColor;
        //     style += '; border-width: 2px';
        //     var span = '<span style="' + style + '"></span>';
        //     var chartInstance = this.chart,
        //     ctx = chartInstance.ctx;

        //       ctx.textAlign = 'center';
        //       ctx.textBaseline = 'bottom';
        //       innerHtml += '<tr><td>' + span;
        //       this.data.datasets.forEach(function (dataset, i) {
        //           var meta = chartInstance.controller.getDatasetMeta(i);
        //           meta.data.forEach(function (bar, index) {
        //               var data = dataset.data[index];
        //               innerHtml =+ bar._model.x;
        //               //ctx.fillText(data, bar._model.x, bar._model.y - 5);
        //           });
        //       });
        //     innerHtml=+ body + '</td></tr>';
        // });

        innerHtml += '</tbody>';
        
        var tableRoot = tooltipEl.querySelector('table');
        tableRoot.innerHTML = innerHtml;
    }

    // `this` will be the overall tooltip
    var position = this._chart.canvas.getBoundingClientRect();

    // Display, position, and set styles for font
    tooltipEl.style.opacity = '1';
    tooltipEl.style.position = 'absolute';
    tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
    tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
    tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
    tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
    tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
    tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
    tooltipEl.style.pointerEvents = 'none';
}
  }
  };
  public lineChartColors:Array<any> = [
    { // grey
      // backgroundColor: 'rgba(148,159,177,0.2)',
      backgroundColor: 'rgba(255,255,255,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      // pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      //below are new
      pointRadius: 5,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'white',
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