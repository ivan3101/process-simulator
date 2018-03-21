import {Component, OnDestroy, OnInit} from '@angular/core';
import {MemoryService} from '../../../services/memory.service';
import {Subscription} from 'rxjs/Subscription';
import {SjfService} from '../../../services/sjf.service';

@Component({
  selector: 'app-sjf-piechart-memory',
  templateUrl: './sjf-piechart-memory.component.html',
  styleUrls: ['./sjf-piechart-memory.component.css']
})
export class SjfPiechartMemoryComponent implements OnInit, OnDestroy {
  distributionProcess;
  processes;
  processesInRam;
  processesInSwap;
  addProcessSubscribtion: Subscription;
  changeMemorySubscription: Subscription;
  constructor(private sjfService: SjfService, private memorySerivce: MemoryService) {
    this.processesInRam = 0;
    this.processesInSwap = 0;
  }

  ngOnInit() {
    this.addProcessSubscribtion = this.sjfService.addProcessEvent.subscribe(value => {
      if (value) {
        this.processes = this.sjfService.getAllProcesses();
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
        this.sjfService.clearProcesses();
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
