import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VideogamesComponent } from './components/videogames/videogames.component';
import { DetailComponent } from './components/videogames/detail/detail.component';
import { RegistrationComponent } from './user/registration/registration.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'videogiochi/:platform', component:VideogamesComponent},
  {path:'videogiochi/all', component:VideogamesComponent},
  {path:'dettaglio/:_id', component:DetailComponent},
  {path:'**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
