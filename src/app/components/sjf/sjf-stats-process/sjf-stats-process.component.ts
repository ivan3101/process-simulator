import {Component, OnDestroy, OnInit} from '@angular/core';
import {MemoryService} from '../../../services/memory.service';
import {Subscription} from 'rxjs/Subscription';
import {SjfService} from '../../../services/sjf.service';

@Component({
  selector: 'app-sjf-stats-process',
  templateUrl: './sjf-stats-process.component.html',
  styleUrls: ['./sjf-stats-process.component.css']
})
export class SjfStatsProcessComponent implements OnInit, OnDestroy {
  totalRam;
  totalSwap;
  remainingRam;
  remainingSwap;
  processes;
  averageWaitTime;
  addProcessSubscribtion: Subscription;
  changeMemorySubscription: Subscription;

  constructor(private sjfService: SjfService, private memorySerivce: MemoryService) {
    const memory = this.memorySerivce.getSizeMemories();
    this.totalRam = memory.ramSize;
    this.totalSwap = memory.swapSize;
    const availableMemory = this.sjfService.getAvailableMemory();
    this.remainingRam = availableMemory.ramAvailable;
    this.remainingSwap = availableMemory.swapAvailable;
    this.processes = sjfService.getAllProcesses();
    this.onCalculateAvgWaitTime();
  }

  ngOnInit() {
    this.addProcessSubscribtion = this.sjfService.addProcessEvent.subscribe(value => {
      if (value) {
        this.processes = this.sjfService.getAllProcesses();
        this.onCalculateAvgWaitTime();
        const availableMemory = this.sjfService.getAvailableMemory();
        this.remainingRam = availableMemory.ramAvailable;
        this.remainingSwap = availableMemory.swapAvailable;
      }
    });

    this.changeMemorySubscription = this.memorySerivce.changeMemoryEvent.subscribe(value => {
      if (value) {
        const memory = this.memorySerivce.getSizeMemories();
        this.totalRam = memory.ramSize;
        this.totalSwap = memory.swapSize;
        this.sjfService.clearProcesses();
      }
    });
  }

  ngOnDestroy() {
    this.addProcessSubscribtion.unsubscribe();
    this.changeMemorySubscription.unsubscribe();
  }

  onCalculateAvgWaitTime() {
    this.averageWaitTime = this.sjfService.avgWaitTime();
  }
}
