import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {PriorityService} from '../../../services/priority.service';

@Component({
  selector: 'app-priority-list-processes',
  templateUrl: './priority-list-processes.component.html',
  styleUrls: ['./priority-list-processes.component.css']
})
export class PriorityListProcessesComponent implements OnInit, OnDestroy {
  fields;
  processes;
  executing;
  addProcessSubscription: Subscription;
  processExecutingSubscription: Subscription;
  finishedProcessSubscription: Subscription;
  finishedProcessesSubscription: Subscription;

  constructor(private priorityService: PriorityService) {
    this.executing = false;
    this.fields = ['Nombre', 'Espacio ocupado', 'Tiempo de ejecución', 'Prioridad'];
    this.processes = this.priorityService.getAllProcesses();
  }

  ngOnInit() {
    this.addProcessSubscription = this.priorityService.addProcessEvent.subscribe(value => {
      if (value) this.processes = this.priorityService.getAllProcesses();
    });

    this.processExecutingSubscription = this.priorityService.processExecuting.subscribe(process => {
      this.processes[this.processes.indexOf(process)].state = 'Ejecutando';
    });

    this.finishedProcessSubscription = this.priorityService.finishedProcess.subscribe(process => {
      this.processes[this.processes.indexOf(process)].state = 'Finalizado';
    });

    this.finishedProcessesSubscription = this.priorityService.finishedProcesses.subscribe(value => {
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
    this.priorityService.executeProcesses();
  }

  onClearProcesses() {
    this.priorityService.clearProcesses();
  }
}
