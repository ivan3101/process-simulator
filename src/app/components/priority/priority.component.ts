import {Component, OnDestroy, OnInit} from '@angular/core';
import {PriorityService} from '../../services/priority.service';

@Component({
  selector: 'app-priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.css']
})
export class PriorityComponent implements OnInit, OnDestroy {

  constructor(private priorityService: PriorityService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.priorityService.clearProcesses()
  }

}
