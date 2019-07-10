import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
//  import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
// Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';

import { FormsModule }   from '@angular/forms';

// Import FusionCharts library
import * as FusionCharts from 'fusioncharts';

// Load FusionCharts Individual Charts
import * as Charts from 'fusioncharts/fusioncharts.charts';
import { HomeComponent } from './home/home.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SettingsComponent } from './settings/settings.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';
import { SettingsformComponent } from './settings/settingsform/settingsform.component';
import { SettingserviceService } from './shared/settingservice.service';

// Use fcRoot function to inject FusionCharts library, and the modules you want to use
FusionChartsModule.fcRoot(FusionCharts, Charts)

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    HomeComponent,
    SettingsComponent,
    ErrorpageComponent,
    SettingsformComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FusionChartsModule ,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [SettingserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
