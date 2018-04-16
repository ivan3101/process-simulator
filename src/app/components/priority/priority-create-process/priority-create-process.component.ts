import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {PriorityService} from '../../../services/priority.service';

@Component({
  selector: 'app-priority-create-process',
  templateUrl: './priority-create-process.component.html',
  styleUrls: ['./priority-create-process.component.css']
})
export class PriorityCreateProcessComponent implements OnInit, AfterViewInit {
  priorityForm: FormGroup;
  @ViewChild('processName') processName;

  constructor(private priorityService: PriorityService) { }

  ngOnInit() {
    this.priorityForm = new FormGroup({
      'processName': new FormControl(null, [Validators
        .required, Validators.maxLength(10)]),
      'size': new FormControl(null, [Validators.required, Validators.min(1)]),
      'burstTime': new FormControl(null, [Validators.required, Validators.min(1)]),
      'priority': new FormControl(null, [Validators.required, Validators.min(0)]),
      'state': new FormControl('Listo'),
      'devices': new FormArray([])
    });
  }

  ngAfterViewInit() {
    M.CharacterCounter.init(this.processName.nativeElement);
  }

  onAddProcess() {
    if (this.priorityService.addProcess(this.priorityForm.value)) {
      this.priorityForm.reset();
      this.priorityForm.patchValue({
        'state': 'Listo'
      });
      this.priorityForm.setControl('devices', new FormArray([]));
    }
  }

  onAddDevice() {
    const device = new FormGroup({
      'name': new FormControl(null, Validators.required)
    });
    (<FormArray>this.priorityForm.get('devices')).push(device);
  }

  onRemoveDevice(index) {
    (<FormArray>this.priorityForm.get('devices')).removeAt(index);
  }

    getDevicesArray() {
        return (<FormArray>this.priorityForm.get('devices'));
    }
}
