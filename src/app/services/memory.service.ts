import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";

@Injectable()
export class MemoryService {
  ramSize = 1000;
  swapSize = 2000;
  changeMemoryEvent = new Subject();

  constructor() { }

  changeSizeMemories(ramSize, swapSize) {
    this.ramSize = ramSize;
    this.swapSize = swapSize;
    this.changeMemoryEvent.next(true);
  }
  getSizeMemories(): {ramSize, swapSize} {
    return {
      ramSize: this.ramSize,
      swapSize: this.swapSize
    };
  }
}
