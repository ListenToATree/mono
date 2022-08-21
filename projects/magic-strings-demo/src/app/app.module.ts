import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MagicStringsModule } from 'magic-strings';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MagicStringsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
