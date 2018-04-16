import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {FcfsService} from "../../../services/fcfs.service";

@Component({
  selector: 'app-fcfs-create-process',
  templateUrl: './fcfs-create-process.component.html',
  styleUrls: ['./fcfs-create-process.component.css']
})
export class FcfsCreateProcessComponent implements OnInit, AfterViewInit {
  fcfsForm: FormGroup;
  @ViewChild('processName') processName;

  constructor(private fcfsService: FcfsService) { }

  ngOnInit() {
    this.fcfsForm = new FormGroup({
      'processName': new FormControl(null, [Validators
        .required, Validators.maxLength(10)]),
      'size': new FormControl(null, [Validators.required, Validators.min(1)]),
      'burstTime': new FormControl(null, [Validators.required, Validators.min(1)]),
      'state': new FormControl('Listo'),
      'devices': new FormArray([])
    });
  }

  ngAfterViewInit() {
    M.CharacterCounter.init(this.processName.nativeElement);
  }

  onAddProcess() {
    if (this.fcfsService.addProcess(this.fcfsForm.value)) {
      this.fcfsForm.reset();
      this.fcfsForm.patchValue({
        'state': 'Listo'
      });
      this.fcfsForm.setControl('devices', new FormArray([]));
    }
  }

  onAddDevice() {
    const device = new FormGroup({
      'name': new FormControl(null, Validators.required)
    });
    (<FormArray>this.fcfsForm.get('devices')).push(device);
  }

  onRemoveDevice(index) {
    (<FormArray>this.fcfsForm.get('devices')).removeAt(index);
  }

  getDevicesArray() {
    return (<FormArray>this.fcfsForm.get('devices'));
  }
}
