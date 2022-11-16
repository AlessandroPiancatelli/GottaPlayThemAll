import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";

import { AppComponent } from './app.component';
import { Carousel1Component } from './components/carousel/carousel1.component';
import { TopselltableComponent } from './components/topselltable/topselltable.component';
import { VideogamesComponent } from './components/videogames/videogames.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { VideogameCardComponent } from './shared/videogame-card/videogame-card.component';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/videogames/detail/detail.component';
import { RegistrationComponent } from './user/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    Carousel1Component,
    TopselltableComponent,
    VideogamesComponent,
    HeaderComponent,
    FooterComponent,
    VideogameCardComponent,
    HomeComponent,
    DetailComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CascadeSelectModule,
    InputTextModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
