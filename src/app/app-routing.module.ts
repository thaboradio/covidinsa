import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SafetyComponent } from './safety/safety.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'safety', component: SafetyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
