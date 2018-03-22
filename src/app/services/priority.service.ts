import { Injectable } from '@angular/core';
import {MemoryService} from './memory.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class PriorityService {
  ramAvailable;
  swapAvailable;
  processes;
  devices;
  alertEvent = new Subject();
  addProcessEvent = new Subject();
  processesExecutingEvent = new Subject();
  processExecuting = new Subject();
  finishedProcess = new Subject();
  finishedProcesses = new Subject();

  constructor(private memoryService: MemoryService) {
    const memory = this.memoryService.getSizeMemories();
    this.ramAvailable = memory.ramSize;
    this.swapAvailable = memory.swapSize;
    this.processes = [];
    this.devices = [];
  }

  getAvailableMemory() {
    return {
      ramAvailable: this.ramAvailable,
      swapAvailable: this.swapAvailable
    };
  }

  getAllProcesses() {
    return this.processes;
  }

  addProcess(process) {
    if (process.size > this.ramAvailable) {
      if (process.size > this.swapAvailable) {
        this.alertEvent.next('No se puede agregar el proceso porque excede la memoria RAM y virtual disponibles');
        return false;
      } else {
        process.memory = 'swap';
        this.swapAvailable -= process.size;
      }
    } else {
      process.memory = 'ram';
      this.ramAvailable -= process.size;
    }
    const checkDevices = this.checkDevices(process);
    if (checkDevices !== undefined) {
      process.state = 'Bloqueado';
      const blockProcess = this.processes.findIndex(process => process.devices.find(device => device.name === checkDevices));
      this.processes[blockProcess].state = 'Bloqueado';
      this.alertEvent.next(`El proceso agregado produce interbloqueo con el proceso '${this.processes[blockProcess].processName}'`);
    }
    this.processes.push(process);
    this.addDevices(process);
    this.addProcessEvent.next(true);
    return true;
  }

  executeProcesses() {
    const processes = this.orderProcesses();
    this.processesExecutingEvent.next(true);
    let i = 0;
    while (i < processes.length && processes[i].state === 'Bloqueado' ) {
      i++;
    }
    if (i < processes.length) {
      this.processExecuting.next(processes[i]);
      let nextProcess = setTimeout(function callProcess() {
        i++;
        while (i < processes.length && processes[i].state === 'Bloqueado' ) {
          i++;
        }
        if (i < processes.length) {
          this.processExecuting.next(processes[i]);
          nextProcess = setTimeout(callProcess.bind(this), processes[i].burstTime * 1000 + 500);
        } else {
          this.finishedProcesses.next(true);
        }
      }.bind(this), processes[i].burstTime * 1000 + 500);
    } else {
      this.finishedProcesses.next(true);
    }
  }

  avgWaitTime() {
    let time = 0;
    let counter = 0;
    this.processes.forEach((process, index) => {
      if (index) {
        counter += this.processes[index - 1].burstTime;
        time += counter;
      }
    });
    return (time / this.processes.length);
  }

  checkDevices(process) {
    return this.devices.find(device => process.devices.find(value =>  value.name.toLowerCase() === device)
    );
  }

  addDevices(process) {
    process.devices.forEach(device => this.devices.push(device.name.toLowerCase()));
  }

  clearProcesses() {
    const memory = this.memoryService.getSizeMemories();
    this.ramAvailable = memory.ramSize;
    this.swapAvailable = memory.swapSize;
    this.processes = [];
    this.devices = [];
    this.addProcessEvent.next(true);
  }

  orderProcesses() {
    return this.processes.sort((a, b) => a.priority - b.priority);
  }
}
