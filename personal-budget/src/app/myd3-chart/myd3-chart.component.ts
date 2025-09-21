import { Component, AfterViewInit } from '@angular/core';
import * as d3 from 'd3';
import { DataService } from '../data.service';

@Component({
  selector: 'pb-myd3-chart',
  templateUrl: './myd3-chart.component.html',
  styleUrls: ['./myd3-chart.component.scss']
})
export class Myd3ChartComponent implements AfterViewInit {
  constructor(private dataService: DataService) {}

  ngAfterViewInit(): void {
    this.dataService.getBudgetData().subscribe((budget) => {
      this.createChart2(budget);
    });
  }

  private createChart2(myBudget: any[]): void {
    const width = 400;
    const height = 400;
    const radius = Math.min(width, height) / 2;

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const arc = d3.arc<any>()
      .innerRadius(0)
      .outerRadius(radius - 10);

    const pie = d3.pie<any>()
      .value((d: any) => d.budget);

    const svg = d3.select('#myd3Chart')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const g = svg.selectAll('.arc')
      .data(pie(myBudget))
      .enter()
      .append('g')
      .attr('class', 'arc');

    g.append('path')
      .attr('d', arc as any)
      .attr('fill', (_d, i) => color(String(i)));

    g.append('text')
      .attr('transform', (d: any) => `translate(${arc.centroid(d)})`)
      .attr('dy', '.35em')
      .style('text-anchor', 'middle')
      .text((d: any) => d.data.title);
  }
}
