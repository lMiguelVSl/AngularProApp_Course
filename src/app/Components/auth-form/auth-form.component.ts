import { Component, EventEmitter, Output, ViewChildren, AfterViewInit, ContentChildren, QueryList, AfterContentInit, ChangeDetectorRef } from '@angular/core';
import { User } from 'src/app/Models/User';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';
import { AuthMessageComponent } from '../auth-message/auth-message.component';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
  @Output() submitted: EventEmitter<User> = new EventEmitter();
  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent> | undefined;
  @ViewChildren(AuthMessageComponent) message: QueryList<AuthMessageComponent> | undefined;

  showMessage: boolean = false;
  formData: User = {
    Email: '',
    Password: ''
  }

  constructor(private cd: ChangeDetectorRef) {

  }

  ngAfterViewInit(): void {
    console.log("message", this.message);
    if (this.message) this.message.forEach(item => item.days = 30);
    this.cd.detectChanges();
  }

  ngAfterContentInit(): void {
    console.log('message aftercontent', this.message);
    //if (this.message) this.message.days = 30;
    if (this.remember)
      this.remember.forEach(item =>
        item.checked.subscribe((check: boolean) => this.showMessage = check)
      )
  }
  onSubmit() {
    this.submitted.emit(this.formData);
  }


}
