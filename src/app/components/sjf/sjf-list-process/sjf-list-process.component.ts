import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {SjfService} from '../../../services/sjf.service';

@Component({
  selector: 'app-sjf-list-process',
  templateUrl: './sjf-list-process.component.html',
  styleUrls: ['./sjf-list-process.component.css']
})
export class SjfListProcessComponent implements OnInit, OnDestroy {
  fields;
  processes;
  executing;
  addProcessSubscription: Subscription;
  processExecutingSubscription: Subscription;
  finishedProcessSubscription: Subscription;
  finishedProcessesSubscription: Subscription;

  constructor(private sjfService: SjfService) {
    this.executing = false;
    this.fields = ['Nombre', 'Espacio ocupado', 'Tiempo de ejecución'];
    this.processes = this.sjfService.getAllProcesses();
  }

  ngOnInit() {
    this.addProcessSubscription = this.sjfService.addProcessEvent.subscribe(value => {
      if (value) this.processes = this.sjfService.getAllProcesses();
    });

    this.processExecutingSubscription = this.sjfService.processExecuting.subscribe(process => {
      this.processes[this.processes.indexOf(process)].state = 'Ejecutando';
    });

    this.finishedProcessSubscription = this.sjfService.finishedProcess.subscribe(process => {
      this.processes[this.processes.indexOf(process)].state = 'Finalizado';
    });

    this.finishedProcessesSubscription = this.sjfService.finishedProcesses.subscribe(value => {
      if (value) {
        this.executing = false;
      }
    });
  }

  ngOnDestroy() {
    this.addProcessSubscription.unsubscribe();
    this.processExecutingSubscription.unsubscribe();
    this.finishedProcessesSubscription.unsubscribe();
    this.finishedProcessSubscription.unsubscribe();
  }

  onExecuteProcesses() {
    this.executing = true;
    this.sjfService.executeProcesses();
  }

  onClearProcesses() {
    this.sjfService.clearProcesses();
  }
}
