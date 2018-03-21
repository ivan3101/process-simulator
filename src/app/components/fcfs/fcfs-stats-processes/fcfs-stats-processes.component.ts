import {Component, OnDestroy, OnInit} from '@angular/core';
import {FcfsService} from "../../../services/fcfs.service";
import {MemoryService} from "../../../services/memory.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-fcfs-stats-processes',
  templateUrl: './fcfs-stats-processes.component.html',
  styleUrls: ['./fcfs-stats-processes.component.css']
})
export class FcfsStatsProcessesComponent implements OnInit, OnDestroy {
  totalRam;
  totalSwap;
  remainingRam;
  remainingSwap;
  processes;
  averageWaitTime;
  addProcessSubscribtion: Subscription;
  changeMemorySubscription: Subscription;

  constructor(private fcfsService: FcfsService, private memorySerivce: MemoryService) {
    const memory = this.memorySerivce.getSizeMemories();
    this.totalRam = memory.ramSize;
    this.totalSwap = memory.swapSize;
    const availableMemory = this.fcfsService.getAvailableMemory();
    this.remainingRam = availableMemory.ramAvailable;
    this.remainingSwap = availableMemory.swapAvailable;
    this.processes = fcfsService.getAllProcesses();
    this.onCalculateAvgWaitTime();
  }

  ngOnInit() {
    this.addProcessSubscribtion = this.fcfsService.addProcessEvent.subscribe(value => {
      if (value) {
        this.processes = this.fcfsService.getAllProcesses();
        this.onCalculateAvgWaitTime();
        const availableMemory = this.fcfsService.getAvailableMemory();
        this.remainingRam = availableMemory.ramAvailable;
        this.remainingSwap = availableMemory.swapAvailable;
      }
    });

    this.changeMemorySubscription = this.memorySerivce.changeMemoryEvent.subscribe(value => {
      if (value) {
        const memory = this.memorySerivce.getSizeMemories();
        this.totalRam = memory.ramSize;
        this.totalSwap = memory.swapSize;
        this.fcfsService.clearProcesses();
      }
    });
  }

  ngOnDestroy() {
    this.addProcessSubscribtion.unsubscribe();
    this.changeMemorySubscription.unsubscribe();
  }

  onCalculateAvgWaitTime() {
    this.averageWaitTime = this.fcfsService.avgWaitTime();
  }
}
