import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FcfsService} from "../../services/fcfs.service";
import {Subscription} from "rxjs/Subscription";
import {SjfService} from '../../services/sjf.service';
import {PriorityService} from '../../services/priority.service';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit, AfterViewInit, OnDestroy{
  @ViewChild('alertModal') alertModal;
  message;
  alertFcfsSubscription: Subscription;
  alertSjfSubscription: Subscription;
  alertPrioritySubscription: Subscription;

  constructor(private fcfsService: FcfsService, private sjfService: SjfService, private priorityService: PriorityService) {  }

  ngOnInit() {
    this.alertFcfsSubscription = this.fcfsService.alertEvent.subscribe(message => {
      this.message = message;
      M.Modal.getInstance(this.alertModal.nativeElement).open();
    });
    this.alertSjfSubscription = this.sjfService.alertEvent.subscribe(message => {
      this.message = message;
      M.Modal.getInstance(this.alertModal.nativeElement).open();
    });
    this.alertPrioritySubscription = this.priorityService.alertEvent.subscribe(message => {
      this.message = message;
      M.Modal.getInstance(this.alertModal.nativeElement).open();
    });
  }

  ngAfterViewInit() {
    M.Modal.init(this.alertModal.nativeElement);
  }

  ngOnDestroy() {
    this.alertFcfsSubscription.unsubscribe();
    this.alertSjfSubscription.unsubscribe();
    this.alertPrioritySubscription.unsubscribe();
  }
}
