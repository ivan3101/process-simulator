import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {PriorityService} from '../../../services/priority.service';

@Component({
  selector: 'app-priority-execute-process',
  templateUrl: './priority-execute-process.component.html',
  styleUrls: ['./priority-execute-process.component.css']
})
export class PriorityExecuteProcessComponent implements OnInit {
  progress;
  process;
  processExecuting: Subscription;
  finishedProcesses: Subscription;
  constructor(private prioritySerivce: PriorityService) {
    this.progress = 0;
  }

  ngOnInit() {
    this.processExecuting = this.prioritySerivce.processExecuting.subscribe(process => {
      this.process = process;
      this.progress = 0;
      let i = 0;
      let changeProgress = setInterval(() => {
        i++;
        this.progress = (i / this.process.burstTime) * 100;
        if (this.progress === 100) {
          clearInterval(changeProgress);
          this.prioritySerivce.finishedProcess.next(this.process);
        }
      }, 1000);
    });

    this.finishedProcesses = this.prioritySerivce.finishedProcesses.subscribe(value => {
      this.process = null;
      this.progress = 0;
    });
  }

  ngOnDestroy() {
    this.processExecuting.unsubscribe();
    this.finishedProcesses.unsubscribe();
  }
}
