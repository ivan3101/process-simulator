import {Component, OnDestroy, OnInit} from '@angular/core';
import {FcfsService} from "../../../services/fcfs.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-fcfs-execute-process',
  templateUrl: './fcfs-execute-process.component.html',
  styleUrls: ['./fcfs-execute-process.component.css']
})
export class FcfsExecuteProcessComponent implements OnInit, OnDestroy {
  progress;
  process;
  processExecuting: Subscription;
  finishedProcesses: Subscription;
  constructor(private fcfsSerivce: FcfsService) {
    this.progress = 0;
  }

  ngOnInit() {
    this.processExecuting = this.fcfsSerivce.processExecuting.subscribe(process => {
      this.process = process;
      this.progress = 0;
      let i = 0;
      let changeProgress = setInterval(() => {
        i++;
        this.progress = (i / this.process.burstTime) * 100;
        if (this.progress === 100) {
          clearInterval(changeProgress);
          this.fcfsSerivce.finishedProcess.next(this.process);
        }
      }, 1000)
    });

    this.finishedProcesses = this.fcfsSerivce.finishedProcesses.subscribe(value => {
      this.process = null;
      this.progress = 0;
    });
  }

  ngOnDestroy() {
    this.processExecuting.unsubscribe();
    this.finishedProcesses.unsubscribe();
  }
}
