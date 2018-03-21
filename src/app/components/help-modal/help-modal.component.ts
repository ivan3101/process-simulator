import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-help-modal',
  templateUrl: './help-modal.component.html',
  styleUrls: ['./help-modal.component.css']
})
export class HelpModalComponent implements AfterViewInit {
  @ViewChild('helpModal') helpModal;
  constructor() { }
  ngAfterViewInit() {
    M.Modal.init(this.helpModal.nativeElement);
  }

}
