import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthFormComponent } from './Components/auth-form/auth-form.component';
import { FormsModule } from '@angular/forms';
import { AuthRememberComponent } from './Components/auth-remember/auth-remember.component';
import { AuthMessageComponent } from './Components/auth-message/auth-message.component';
import { CreditCardDirective } from './Directives/credit-card.directive';
import { FileSizePipe } from './Pipes/filesize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AuthFormComponent,
    AuthRememberComponent,
    AuthMessageComponent,
    CreditCardDirective,
    FileSizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    FileSizePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
