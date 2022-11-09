import { Component, OnInit } from '@angular/core';

import { ChartData, ChartType } from 'chart.js';

import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [],
        backgroundColor: [
          '#0075ED',
          '#00BAF7',
          '#00E0DB',
          '#00F7AD',
          '#00ED63'
        ]
      },
    ]
  };

  constructor( private graficasService: GraficasService ) { }

  ngOnInit(): void {
    this.graficasService.getUsuariosRedesSociales()
      .subscribe( ({ labels, datasets }) => {
        this.doughnutChartData = { labels, datasets }
      });
  }

}
