import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VideogamesComponent } from './components/videogames/videogames.component';
import { DetailComponent } from './components/videogames/detail/detail.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'nuoveuscite', component:VideogamesComponent},
  {path:'dettaglio/:_id', component:DetailComponent},
  {path:'**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
