import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HomeListComponent } from './home-list/home-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ HomeListComponent ],
  bootstrap:    [ HomeListComponent ]
})
export class AppModule { }
