import {AfterViewInit, Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.css']
})
export class SettingsButtonComponent implements AfterViewInit {
  @ViewChild('floatingButton') floatingButton;
  @ViewChild('helper') helper;
  constructor() { }
  ngAfterViewInit() {
    M.FloatingActionButton.init(this.floatingButton.nativeElement);
    M.FeatureDiscovery.init(this.helper.nativeElement);
    if (!localStorage.getItem('new')) {
      M.FeatureDiscovery.getInstance(this.helper.nativeElement).open();
      localStorage.setItem('new', 'false');
    }
  }
}

