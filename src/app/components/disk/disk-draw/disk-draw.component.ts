import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {DiskService} from '../../../services/disk.service';

@Component({
  selector: 'app-disk-draw',
  templateUrl: './disk-draw.component.html',
  styleUrls: ['./disk-draw.component.css']
})
export class DiskDrawComponent implements OnInit, OnDestroy {
  chart;
  positionSubscription: Subscription;
  clearChartSubscription: Subscription;
  constructor(private diskService: DiskService) { }

  ngOnInit() {
    this.chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      theme: 'light2',
      title: {},
      data: [{
        type: 'line',
        dataPoints: []
      }]
    });
    this.chart.render();
    this.positionSubscription = this.diskService.positionEvent.subscribe((coordinates: {x,y}) => {
      this.chart.options.data[0].dataPoints.push({x: coordinates.x, y: coordinates.y});
      this.chart.render();
    });
    this.clearChartSubscription = this.diskService.clearChartEvent.subscribe(value => {
      this.chart.options.data[0].dataPoints = [];
      this.chart.render();
    });
  }

  ngOnDestroy() {
    this.positionSubscription.unsubscribe();
    this.clearChartSubscription.unsubscribe();
  }

}
