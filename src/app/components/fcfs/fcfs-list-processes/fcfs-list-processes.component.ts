import {Component, OnDestroy, OnInit} from '@angular/core';
import {FcfsService} from "../../../services/fcfs.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-fcfs-list-processes',
  templateUrl: './fcfs-list-processes.component.html',
  styleUrls: ['./fcfs-list-processes.component.css']
})
export class FcfsListProcessesComponent implements OnInit, OnDestroy {
  fields;
  processes;
  executing;
  addProcessSubscription: Subscription;
  processExecutingSubscription: Subscription;
  finishedProcessSubscription: Subscription;
  finishedProcessesSubscription: Subscription;

  constructor(private fcfsService: FcfsService) {
    this.executing = false;
    this.fields = ['Nombre', 'Espacio ocupado', 'Tiempo de ejecución'];
    this.processes = this.fcfsService.getAllProcesses();
  }

  ngOnInit() {
    this.addProcessSubscription = this.fcfsService.addProcessEvent.subscribe(value => {
      if (value) this.processes = this.fcfsService.getAllProcesses();
    });

    this.processExecutingSubscription = this.fcfsService.processExecuting.subscribe(process => {
      this.processes[this.processes.indexOf(process)].state = 'Ejecutando';
    });

    this.finishedProcessSubscription = this.fcfsService.finishedProcess.subscribe(process => {
      this.processes[this.processes.indexOf(process)].state = 'Finalizado';
    });

    this.finishedProcessesSubscription = this.fcfsService.finishedProcesses.subscribe(value => {
      if (value) {
        this.executing = false;
      }
    });
  }

  ngOnDestroy() {
    this.addProcessSubscription.unsubscribe();
  }

  onExecuteProcesses() {
    this.executing = true;
    this.fcfsService.executeProcesses();
  }

  onClearProcesses() {
    this.fcfsService.clearProcesses();
  }
}
