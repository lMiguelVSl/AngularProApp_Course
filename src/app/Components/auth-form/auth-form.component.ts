import { Component, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent {
  @Output() submitted: EventEmitter<User> = new EventEmitter();

  formData: User = {
    Email: '',
    Password: ''
  }
  onSubmit() {
    this.submitted.emit(this.formData);
  }


}
