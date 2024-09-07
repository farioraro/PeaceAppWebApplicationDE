import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {MapComponent} from "./map/map.component";
import {LayoutComponent} from "./layout/layout.component";
import {ReportsComponent} from "./reports/reports.component";
import {ShareLocationComponent} from "./share-location/share-location.component";
import {AlertsComponent} from "./alerts/alerts.component";
import {ReportIncidentComponent} from "./report-incident/report-incident.component";

const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta por defecto
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'map', component: MapComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'share-location', component: ShareLocationComponent },
      { path: 'alerts', component: AlertsComponent },
      { path: 'report-incident', component: ReportIncidentComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
