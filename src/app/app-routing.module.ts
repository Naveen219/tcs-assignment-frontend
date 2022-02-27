import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'google-maps', component: MapComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'summary', component: SummaryComponent},
  {
    path: '**',
    component: LoginComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
