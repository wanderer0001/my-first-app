import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ItemsListComponent } from './itemsList/items-list-component';
import { ItemCardComponent } from './itemsList/itemCard/item-card-component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
