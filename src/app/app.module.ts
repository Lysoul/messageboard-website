import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { 
  MatButtonModule, 
  MatCardModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { MessageCoponent } from './messages.component';

@NgModule({
  declarations: [
    AppComponent,MessageCoponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,MatButtonModule, MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
