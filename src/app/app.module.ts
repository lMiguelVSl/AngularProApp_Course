import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthFormComponent } from './Components/auth-form/auth-form.component';
import { FormsModule } from '@angular/forms';
import { AuthRememberComponent } from './Components/auth-remember/auth-remember.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthFormComponent,
    AuthRememberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
