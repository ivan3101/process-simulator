import {Component, OnDestroy, OnInit} from '@angular/core';
import {FcfsService} from "../../../services/fcfs.service";
import {MemoryService} from "../../../services/memory.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-fcfs-piechart-memory',
  templateUrl: './fcfs-piechart-memory.component.html',
  styleUrls: ['./fcfs-piechart-memory.component.css']
})
export class FcfsPiechartMemoryComponent implements OnInit, OnDestroy {
  distributionProcess;
  processes;
  processesInRam;
  processesInSwap;
  addProcessSubscribtion: Subscription;
  changeMemorySubscription: Subscription;
  constructor(private fcfsService: FcfsService, private memorySerivce: MemoryService) {
    this.processesInRam = 0;
    this.processesInSwap = 0;
  }

  ngOnInit() {
    this.addProcessSubscribtion = this.fcfsService.addProcessEvent.subscribe(value => {
      if (value) {
        this.processes = this.fcfsService.getAllProcesses();
        this.processesInRam = 0;
        this.processesInSwap = 0;
        this.processes.forEach(value => {
          if (value.memory === 'ram') {
            this.processesInRam++;
          } else if (value.memory === 'swap') {
            this.processesInSwap++;
          }
        });
        this.processesInRam /= this.processes.length;
        this.processesInRam *= 100;
        this.processesInSwap /= this.processes.length;
        this.processesInSwap *= 100;
        this.distributionProcess.options.data[0].dataPoints = [{y: this.processesInRam, label: 'RAM'}, {y: this.processesInSwap, label: 'Virtual'}];
        this.distributionProcess.render();
      }
    });

    this.changeMemorySubscription = this.memorySerivce.changeMemoryEvent.subscribe(value => {
      if (value) {
        this.processesInRam = 0;
        this.processesInSwap = 0;
        this.fcfsService.clearProcesses();
      }
    });

    this.distributionProcess = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title: {
        text: "Distribución de Procesos en Memoria"
      },
      data: [{
        type: "pie",
        startAngle: 240,
        yValueFormatString: "##0.00\"%\"",
        indexLabel: "{label} {y}",
        dataPoints: [{y: this.processesInRam, label: 'RAM'}, {y: this.processesInSwap, label: 'Virtual'}]
      }]
    });
    this.distributionProcess.render();
  }

  ngOnDestroy() {
    this.addProcessSubscribtion.unsubscribe();
    this.changeMemorySubscription.unsubscribe();
  }

}
