import { Component } from '@angular/core';
import { User } from './Models/User';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-auth-form (submitted)="createUser($event)">
        <h3>Create Account</h3>
        <button type="submit">Join Us</button>
      </app-auth-form>
      <app-auth-form (submitted)="loginUser($event)">
        <h3>Login</h3>
        <button  type="submit">Login</button>
      </app-auth-form>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProApp';

  createUser(user: User) {
    console.log("Create User:", user);
  }

  loginUser(user: User) {
    console.log("Login User:", user);
  }
}
