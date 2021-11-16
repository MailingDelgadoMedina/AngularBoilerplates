import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HomeComponent } from './shared/home/home.component';

import { AlbumsModule } from './modules/albums/albums.module';
import { AboutComponent } from './shared/about/about.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent],
  imports: [BrowserModule, AlbumsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
