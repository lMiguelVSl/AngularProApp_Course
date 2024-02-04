import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { FormsModule } from '@angular/forms';
import { AuthRememberComponent } from './components/auth-remember/auth-remember.component';
import { AuthMessageComponent } from './components/auth-message/auth-message.component';
import { CreditCardDirective } from './directives/credit-card.directive';
import { FileSizePipe } from './pipes/filesize.pipe';
import { StockInventoryModule } from './stock-inventory/stock-inventory.module';

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
    FormsModule,
    StockInventoryModule
  ],
  providers: [
    FileSizePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
