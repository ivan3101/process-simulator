import {Component, OnDestroy, OnInit} from '@angular/core';
import {MemoryService} from '../../../services/memory.service';
import {Subscription} from 'rxjs/Subscription';
import {PriorityService} from '../../../services/priority.service';

@Component({
  selector: 'app-priority-stats-processes',
  templateUrl: './priority-stats-processes.component.html',
  styleUrls: ['./priority-stats-processes.component.css']
})
export class PriorityStatsProcessesComponent implements OnInit, OnDestroy {
  totalRam;
  totalSwap;
  remainingRam;
  remainingSwap;
  processes;
  averageWaitTime;
  addProcessSubscribtion: Subscription;
  changeMemorySubscription: Subscription;

  constructor(private priorityService: PriorityService, private memorySerivce: MemoryService) {
    const memory = this.memorySerivce.getSizeMemories();
    this.totalRam = memory.ramSize;
    this.totalSwap = memory.swapSize;
    const availableMemory = this.priorityService.getAvailableMemory();
    this.remainingRam = availableMemory.ramAvailable;
    this.remainingSwap = availableMemory.swapAvailable;
    this.processes = priorityService.getAllProcesses();
    this.onCalculateAvgWaitTime();
  }

  ngOnInit() {
    this.addProcessSubscribtion = this.priorityService.addProcessEvent.subscribe(value => {
      if (value) {
        this.processes = this.priorityService.getAllProcesses();
        this.onCalculateAvgWaitTime();
        const availableMemory = this.priorityService.getAvailableMemory();
        this.remainingRam = availableMemory.ramAvailable;
        this.remainingSwap = availableMemory.swapAvailable;
      }
    });

    this.changeMemorySubscription = this.memorySerivce.changeMemoryEvent.subscribe(value => {
      if (value) {
        const memory = this.memorySerivce.getSizeMemories();
        this.totalRam = memory.ramSize;
        this.totalSwap = memory.swapSize;
        this.priorityService.clearProcesses();
      }
    });
  }

  ngOnDestroy() {
    this.addProcessSubscribtion.unsubscribe();
    this.changeMemorySubscription.unsubscribe();
  }

  onCalculateAvgWaitTime() {
    this.averageWaitTime = this.priorityService.avgWaitTime();
  }
}
