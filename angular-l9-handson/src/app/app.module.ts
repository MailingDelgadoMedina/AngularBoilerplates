import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreetingComponent } from './shared/components/greeting/greeting.component';
import { FormsModule } from '@angular/forms';
import { MessageFormComponent } from './shared/components/message-form/message-form.component';
import { SkillsModule } from './modules/skills/skills.module';
import { AppRoutingModule } from './app-routing.module';
import { MoviesModule } from './modules/movies/movies.module';

@NgModule({
  declarations: [AppComponent, GreetingComponent, MessageFormComponent],
  imports: [
    BrowserModule,
    FormsModule,
    SkillsModule,
    AppRoutingModule,
    MoviesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
