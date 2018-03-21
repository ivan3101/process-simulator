import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {SjfService} from '../../../services/sjf.service';

@Component({
  selector: 'app-sjf-create-process',
  templateUrl: './sjf-create-process.component.html',
  styleUrls: ['./sjf-create-process.component.css']
})
export class SjfCreateProcessComponent implements OnInit, AfterViewInit {
  sjfForm: FormGroup;
  @ViewChild('processName') processName;

  constructor(private sjfService: SjfService) { }

  ngOnInit() {
    this.sjfForm = new FormGroup({
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
    if (this.sjfService.addProcess(this.sjfForm.value)) {
      this.sjfForm.reset();
      this.sjfForm.patchValue({
        'state': 'Listo'
      });
      this.sjfForm.setControl('devices', new FormArray([]));
    }
  }

  onAddDevice() {
    const device = new FormGroup({
      'name': new FormControl(null, Validators.required)
    });
    (<FormArray>this.sjfForm.get('devices')).push(device);
  }

  onRemoveDevice(index) {
    (<FormArray>this.sjfForm.get('devices')).removeAt(index);
  }
}
