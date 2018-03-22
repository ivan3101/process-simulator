import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DiskService} from '../../../services/disk.service';

@Component({
  selector: 'app-disk-create',
  templateUrl: './disk-create.component.html',
  styleUrls: ['./disk-create.component.css']
})
export class DiskCreateComponent implements OnInit {
  queue;
  constructor(private diskService: DiskService) { }

  ngOnInit() {
    this.queue = new FormGroup({
      'cylinders': new FormControl(null, [Validators.required, Validators.min(1)]),
      'start': new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    const cylinders = this.queue.value.cylinders;
    const start = this.queue.value.start;
    this.diskService.drawFcfs(cylinders, start);
  }

  clearChart() {
    this.diskService.clearChartEvent.next(true);
  }

}
