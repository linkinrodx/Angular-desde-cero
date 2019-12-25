import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BertoniService } from './services/bertoni.service';
import { HttpClientModule } from '@angular/common/http';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonService } from './services/pokemon.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    BertoniService,
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
