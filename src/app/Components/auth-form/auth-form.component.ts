import { Component, EventEmitter, Output, ViewChildren, ViewChild, AfterViewInit, ContentChildren, QueryList, AfterContentInit, ChangeDetectorRef, ElementRef } from '@angular/core';
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
  @ContentChildren(AuthRememberComponent) remember!: QueryList<AuthRememberComponent>;
  @ViewChildren(AuthMessageComponent) message!: QueryList<AuthMessageComponent>;
  @ViewChild('email') email!: ElementRef;

  showMessage: boolean = false;
  formData: User = {
    Email: '',
    Password: ''
  }

  constructor(private cd: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.email.nativeElement.setAttribute('placeholder', 'Enter your email');
    this.email.nativeElement.classList.add('email');
    this.email.nativeElement.focus();
    if (this.message) this.message.forEach(item => item.days = 30);
    this.cd.detectChanges();
  }

  ngAfterContentInit(): void {
    if (this.remember)
      this.remember.forEach(item =>
        item.checked.subscribe((check: boolean) => this.showMessage = check)
      )
  }
  onSubmit() {
    this.submitted.emit(this.formData);
  }


}
