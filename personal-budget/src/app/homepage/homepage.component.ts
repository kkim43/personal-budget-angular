import { Component, OnInit, AfterViewInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit {

  public dataSource = {
    datasets: [
      {
        data: [],
        backgroundColor: [ '#ffcd56','#ff6384','#36a2eb','#fd6b19', '#4bc0c0','#9966ff','#c9cbcf','#ff9f40', '#ff6384','#36a2eb','#4bc0c0'
        ]
      }
    ],
    labels: []
  };

  constructor(private http: HttpClient ) {  }

  ngAfterViewInit(): void {
    this.http.get('http://localhost:3000/budget')
    .subscribe( (res: any) => {
      for (var i = 0; i < res.myBudget.length; i++) {
        this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
        this.dataSource.labels[i] = res.myBudget[i].title;  
        this.createChart();                  
      }
    } );
  }

  createChart() {
    var ctx = document.getElementById('myChart') as HTMLCanvasElement;
    // var ctx = document.getElementById('myChart').getContext('2d');
    var myPieChart = new Chart(ctx, {
      type: 'pie',
      data: this.dataSource
    });
  } 

}
