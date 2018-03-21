import {Component, OnDestroy, OnInit} from '@angular/core';
import {FcfsService} from '../../services/fcfs.service';

@Component({
  selector: 'app-fcfs',
  templateUrl: './fcfs.component.html',
  styleUrls: ['./fcfs.component.css']
})
export class FcfsComponent implements OnInit, OnDestroy {

  constructor(private fcfsService: FcfsService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.fcfsService.clearProcesses();
  }

}
