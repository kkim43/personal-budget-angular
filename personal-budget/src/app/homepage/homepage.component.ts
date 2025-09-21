import { Component, AfterViewInit } from '@angular/core';
import { DataService } from '../data.service';
import { Chart } from 'chart.js';

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
        backgroundColor: [
          '#ffcd56', '#ff6384', '#36a2eb', '#fd6b19',
          '#4bc0c0', '#9966ff', '#c9cbcf', '#ff9f40',
          '#ff6384', '#36a2eb', '#4bc0c0'
        ]
      }
    ],
    labels: []
  };

  constructor(private dataService: DataService) {}

  ngAfterViewInit(): void {
    this.dataService.getBudgetData().subscribe((budget) => {
      for (let i = 0; i < budget.length; i++) {
        this.dataSource.datasets[0].data[i] = budget[i].budget;
        this.dataSource.labels[i] = budget[i].title;
      }
      this.createChart();
    });
  }

  createChart() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: this.dataSource
    });
  }
}
