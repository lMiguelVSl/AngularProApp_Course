import { Component, EventEmitter, Output, ViewChildren, ViewChild, AfterViewInit, ContentChildren, QueryList, AfterContentInit, ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';
import { AuthMessageComponent } from '../auth-message/auth-message.component';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
  title: string = 'Test title';
  showMessage: boolean = false;
  formData: User = {
    Email: '',
    Password: ''
  }
  
  @Output() submitted: EventEmitter<User> = new EventEmitter();
  @ContentChildren(AuthRememberComponent) remember!: QueryList<AuthRememberComponent>;
  @ViewChildren(AuthMessageComponent) message!: QueryList<AuthMessageComponent>;
  @ViewChild('email') email!: ElementRef;


  constructor(private cd: ChangeDetectorRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.renderer.setAttribute(this.email.nativeElement, 'placeholder', 'test place holder');
    // this.email.nativeElement.setAttribute('placeholder', 'Enter your email');
    // this.email.nativeElement.classList.add('email');
    // this.email.nativeElement.focus();
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
