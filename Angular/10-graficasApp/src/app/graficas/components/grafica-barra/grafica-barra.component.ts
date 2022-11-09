import { Component, Input, ViewChild, OnInit } from '@angular/core';

import { ChartConfiguration, ChartData, ChartEvent, ChartType, ChartDataset } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.css']
})
export class GraficaBarraComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() horizontal: boolean = false;
  @Input() barChartData!: ChartData<'bar'>;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  
  public barChartType: ChartType = 'bar';

  constructor() {}

  ngOnInit(): void {
    if( this.horizontal ) {
      this.barChartOptions!.indexAxis = 'y';
    }
  }

}
