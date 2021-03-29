import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrelloDashboardComponent } from './modules/trello-dashboard/trello-dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: TrelloDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
