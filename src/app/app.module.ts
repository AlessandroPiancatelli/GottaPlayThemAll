import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Carousel1Component } from './components/carousel/carousel1.component';
import { TopselltableComponent } from './components/topselltable/topselltable.component';
import { VideogamesComponent } from './components/videogames/videogames.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { VideogameCardComponent } from './shared/videogame-card/videogame-card.component';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/videogames/detail/detail.component';

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
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
