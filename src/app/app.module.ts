import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FcfsComponent } from './components/fcfs/fcfs.component';
import { SjfComponent } from './components/sjf/sjf.component';
import { PriorityComponent } from './components/priority/priority.component';
import { AlertModalComponent } from './components/alert-modal/alert-modal.component';
import { SettingsButtonComponent } from './components/settings-button/settings-button.component';
import { SettingModalComponent } from './components/setting-modal/setting-modal.component';
import { HelpModalComponent } from './components/help-modal/help-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MemoryService} from './services/memory.service';
import { FcfsCreateProcessComponent } from './components/fcfs/fcfs-create-process/fcfs-create-process.component';
import { FcfsListProcessesComponent } from './components/fcfs/fcfs-list-processes/fcfs-list-processes.component';
import { FcfsStatsProcessesComponent } from './components/fcfs/fcfs-stats-processes/fcfs-stats-processes.component';
import { FcfsExecuteProcessComponent } from './components/fcfs/fcfs-execute-process/fcfs-execute-process.component';
import {FcfsService} from './services/fcfs.service';
import { FcfsPiechartMemoryComponent } from './components/fcfs/fcfs-piechart-memory/fcfs-piechart-memory.component';
import { FcfsCpuChartComponent } from './components/fcfs/fcfs-cpu-chart/fcfs-cpu-chart.component';
import { SjfCpuChartComponent } from './components/sjf/sjf-cpu-chart/sjf-cpu-chart.component';
import { SjfCreateProcessComponent } from './components/sjf/sjf-create-process/sjf-create-process.component';
import { SjfExecuteProcessComponent } from './components/sjf/sjf-execute-process/sjf-execute-process.component';
import { SjfListProcessComponent } from './components/sjf/sjf-list-process/sjf-list-process.component';
import { SjfPiechartMemoryComponent } from './components/sjf/sjf-piechart-memory/sjf-piechart-memory.component';
import { SjfStatsProcessComponent } from './components/sjf/sjf-stats-process/sjf-stats-process.component';
import {SjfService} from './services/sjf.service';
import {RouterModule, Routes} from '@angular/router';
import { PriorityCreateProcessComponent } from './components/priority/priority-create-process/priority-create-process.component';
import {PriorityService} from './services/priority.service';
import { PriorityListProcessesComponent } from './components/priority/priority-list-processes/priority-list-processes.component';
import { PriorityStatsProcessesComponent } from './components/priority/priority-stats-processes/priority-stats-processes.component';
import { PriorityExecuteProcessComponent } from './components/priority/priority-execute-process/priority-execute-process.component';
import { PriorityPiechartMemoryComponent } from './components/priority/priority-piechart-memory/priority-piechart-memory.component';
import { PriorityCpuChartComponent } from './components/priority/priority-cpu-chart/priority-cpu-chart.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'fcfs', pathMatch: 'full'},
  {path: 'fcfs', component: FcfsComponent},
  {path: 'sjf', component: SjfComponent},
  {path: 'priority', component: PriorityComponent},
  {path: '**', redirectTo: 'fcfs'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FcfsComponent,
    SjfComponent,
    PriorityComponent,
    AlertModalComponent,
    SettingsButtonComponent,
    SettingModalComponent,
    HelpModalComponent,
    FcfsCreateProcessComponent,
    FcfsListProcessesComponent,
    FcfsStatsProcessesComponent,
    FcfsExecuteProcessComponent,
    FcfsPiechartMemoryComponent,
    FcfsCpuChartComponent,
    SjfCpuChartComponent,
    SjfCreateProcessComponent,
    SjfExecuteProcessComponent,
    SjfListProcessComponent,
    SjfPiechartMemoryComponent,
    SjfStatsProcessComponent,
    PriorityCreateProcessComponent,
    PriorityListProcessesComponent,
    PriorityStatsProcessesComponent,
    PriorityExecuteProcessComponent,
    PriorityPiechartMemoryComponent,
    PriorityCpuChartComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MemoryService,
    FcfsService,
    SjfService,
    PriorityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
