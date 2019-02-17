import { Component } from '@angular/core'

@Component({
    selector: 'chart',
    template: '<h2>{{ title }}</h2>'
})
export class ChartComponent {
    title = "Chart Demo";
}