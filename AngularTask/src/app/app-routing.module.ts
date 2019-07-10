import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'settings',component:SettingsComponent},
  { path : "**" , component:ErrorpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
