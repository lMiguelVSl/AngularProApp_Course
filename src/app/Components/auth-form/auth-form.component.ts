import { Component, EventEmitter, Output, ContentChild, AfterContentInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements AfterContentInit {
  @Output() submitted: EventEmitter<User> = new EventEmitter();
  @ContentChild(AuthRememberComponent)
  remember: AuthRememberComponent | undefined;

  showMessage: boolean = false;
  formData: User = {
    Email: '',
    Password: ''
  }

  ngAfterContentInit(): void {
    if(this.remember) {
      console.log("First after init", AuthRememberComponent);
      this.remember.checked.subscribe((check: boolean) => {
        this.showMessage = check;
      });
    }
  }
  onSubmit() {
    this.submitted.emit(this.formData);
  }


}
