import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

import { AppComponent } from './app.component';
import {UppercasePipe} from './pipes/uppercase.pipe';
import { SafedomPipe } from './pipes/safedom.pipe';
import { PasswordPipe } from './pipes/password.pipe'

@NgModule({
  declarations: [
    AppComponent,
    UppercasePipe,
    SafedomPipe,
    PasswordPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
