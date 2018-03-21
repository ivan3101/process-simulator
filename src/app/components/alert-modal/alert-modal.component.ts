import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FcfsService} from "../../services/fcfs.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit, AfterViewInit, OnDestroy{
  @ViewChild('alertModal') alertModal;
  message;
  alertSubscription: Subscription;
  constructor(private fcfsSerivice: FcfsService) {  }

  ngOnInit() {
    this.alertSubscription = this.fcfsSerivice.alertEvent.subscribe(message => {
      this.message = message;
      M.Modal.getInstance(this.alertModal.nativeElement).open();
    })
  }

  ngAfterViewInit() {
    M.Modal.init(this.alertModal.nativeElement);
  }

  ngOnDestroy() {
    this.alertSubscription.unsubscribe();
  }
}
