import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class DiskService {
  positionEvent = new Subject();
  clearChartEvent = new Subject();
  constructor() { }

  drawFcfs(cylinders, start) {
    const data = Math.floor(Math.random() * (14 - 10)) + 10;
    let coordinates = [{
      x: start,
      y: data
    }];
    for (let i = data - 1; i > 0; i--) {
    	coordinates.push({
        x: Math.floor(Math.random() * (cylinders)),
        y: i
      });
    }
    this.positionEvent.next(coordinates);
  }

}
