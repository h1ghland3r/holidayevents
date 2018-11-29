import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { HeaderComponent } from './components/header/header.component';
import { ActionsComponent } from './components/actions/actions.component';

import { HolidayService } from './shared/holiday.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeaderComponent,
    ActionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    HolidayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
