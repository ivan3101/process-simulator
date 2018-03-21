import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";
import {MemoryService} from "../../services/memory.service";

@Component({
  selector: 'app-setting-modal',
  templateUrl: './setting-modal.component.html',
  styleUrls: ['./setting-modal.component.css']
})
export class SettingModalComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('settingsModal') settingsModal;
  settingsForm: FormGroup;
  changeSizeSubscription: Subscription;
  ramSize: number;
  swapSize: number;
  constructor(private memoryService: MemoryService) {
    const memory = this.memoryService.getSizeMemories();
    this.ramSize = memory.ramSize;
    this.swapSize = memory.swapSize;
  }
  ngOnInit() {
    this.changeSizeSubscription = this.memoryService.changeMemoryEvent.subscribe((value: boolean) => {
      if (value) {
        const memory = this.memoryService.getSizeMemories();
        this.ramSize = memory.ramSize;
        this.swapSize = memory.swapSize;
        this.settingsForm.get('ram').setValue(this.ramSize);
        this.settingsForm.get('swap').setValue(this.swapSize);
      }
    });
    this.settingsForm = new FormGroup({
      'ram': new FormControl(this.ramSize),
      'swap': new FormControl(this.swapSize)
    });

  }
  ngAfterViewInit() {
    M.Modal.init(this.settingsModal.nativeElement);
  }

  ngOnDestroy() {
    this.changeSizeSubscription.unsubscribe();
  }

  submit() {
    const ram = this.settingsForm.get('ram').value;
    const swap = this.settingsForm.get('swap').value;
    this.memoryService.changeSizeMemories(ram, swap);
  }

}
