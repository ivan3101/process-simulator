import {Component, OnDestroy, OnInit} from '@angular/core';
import {SjfService} from '../../services/sjf.service';

@Component({
  selector: 'app-sjf',
  templateUrl: './sjf.component.html',
  styleUrls: ['./sjf.component.css']
})
export class SjfComponent implements OnInit, OnDestroy {

  constructor(private sjfService: SjfService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sjfService.clearProcesses();
  }
}
