import {Component, OnDestroy, OnInit} from '@angular/core';
import {FcfsService} from "../../../services/fcfs.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-fcfs-cpu-chart',
  templateUrl: './fcfs-cpu-chart.component.html',
  styleUrls: ['./fcfs-cpu-chart.component.css']
})
export class FcfsCpuChartComponent implements OnInit, OnDestroy {
  loadPercentage;
  chart;
  dataLenght;
  loadInterval;
  unloadInterval;
  time;
  updateInterval;
  processesExecutingSubscription: Subscription;
  processesFinishedSubscription: Subscription;
  constructor(private fcfsSerivce: FcfsService) {
    this.dataLenght = 6;
    this.time = 0;
    this.loadPercentage = 0;
  }

  ngOnInit() {
    this.chart = new CanvasJS.Chart("chartContainer2", {
      animationEnabled: true,
      title: {
        text: "Utilización del CPU en intervalos de 2 segundos"
      },
      axisX: {
        title: "Tiempo"
      },
      axisY: {
        title: "Porcentaje",
        suffix: "%"
      },
      data: [{
        type: "line",
        name: "Carga del CPU",
        connectNullData: true,
        dataPoints: []
      }]
    });
    this.chart.render();
    this.updateInterval = setInterval(() => {
      this.time += 2;
      this.chart.options.data[0].dataPoints.push({x: this.time, y: this.loadPercentage});
      if (this.chart.options.data[0].dataPoints.length > this.dataLenght) {
        this.chart.options.data[0].dataPoints.shift();
      }
      this.chart.render();
    }, 2000);
    this.processesExecutingSubscription = this.fcfsSerivce.processesExecutingEvent.subscribe(value => {
      this.loadInterval = setInterval(() => {
        this.loadPercentage = Math.floor(Math.random() * (101 - 35)) + 35;
      }, 2000);
    });
    this.processesFinishedSubscription = this.fcfsSerivce.finishedProcesses.subscribe(value =>  {
      clearInterval(this.loadInterval);
      let i = 0;
      let steps = Math.floor(Math.random() * (3-2)) + 2;
      this.unloadInterval = setInterval(() => {
        if (i > steps) {
          clearInterval(this.unloadInterval);
          this.loadPercentage = 0;
        } else {
          this.loadPercentage = Math.floor(Math.random() * 35);
          i++;
        }
      }, 2000);
    })
  }

  ngOnDestroy() {
    this.processesExecutingSubscription.unsubscribe();
    this.processesFinishedSubscription.unsubscribe();
  }

}
