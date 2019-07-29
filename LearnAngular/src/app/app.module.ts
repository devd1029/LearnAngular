import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LanguagesComponent } from './languages/languages.component';
import { FoodComponent } from './food/food.component';

import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LanguagesComponent,
    FoodComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
