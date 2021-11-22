import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DisplayMoviesComponent } from './display-movies/display-movies.component';

@NgModule({
  declarations: [DisplayMoviesComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [DisplayMoviesComponent],
})
export class MoviesModule {}
