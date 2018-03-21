import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {SjfService} from '../../../services/sjf.service';

@Component({
  selector: 'app-sjf-execute-process',
  templateUrl: './sjf-execute-process.component.html',
  styleUrls: ['./sjf-execute-process.component.css']
})
export class SjfExecuteProcessComponent implements OnInit, OnDestroy {
  progress;
  process;
  processExecuting: Subscription;
  finishedProcesses: Subscription;
  constructor(private sjfSerivce: SjfService) {
    this.progress = 0;
  }

  ngOnInit() {
    this.processExecuting = this.sjfSerivce.processExecuting.subscribe(process => {
      this.process = process;
      this.progress = 0;
      let i = 0;
      let changeProgress = setInterval(() => {
        i++;
        this.progress = (i / this.process.burstTime) * 100;
        if (this.progress === 100) {
          clearInterval(changeProgress);
          this.sjfSerivce.finishedProcess.next(this.process);
        }
      }, 1000);
    });

    this.finishedProcesses = this.sjfSerivce.finishedProcesses.subscribe(value => {
      this.process = null;
      this.progress = 0;
    });
  }

  ngOnDestroy() {
    this.processExecuting.unsubscribe();
    this.finishedProcesses.unsubscribe();
  }
}
