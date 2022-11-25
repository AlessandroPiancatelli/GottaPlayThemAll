import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VideogamesComponent } from './components/videogames/videogames.component';
import { DetailComponent } from './components/videogames/detail/detail.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { AggiungiVideogameComponent } from './components/aggiungi-videogame/aggiungi-videogame.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { LoggedInGuard } from './logged-in.guard';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'videogiochi/:platform', component:VideogamesComponent},
  {path:'videogiochi/all', component:VideogamesComponent},
  {path:'dettaglio/:_id', component:DetailComponent},
  {path:'profile', component:ProfileComponent, canActivate:[LoggedInGuard]},
  {path:'login', component: LoginComponent},
  {path:'new-videogame', component:AggiungiVideogameComponent, canActivate:[LoggedInGuard]},
  {path:'**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
