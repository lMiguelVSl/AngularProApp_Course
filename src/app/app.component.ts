import { AfterViewInit, Component, ComponentRef, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { User } from './Models/User';
import { AuthFormComponent } from './Components/auth-form/auth-form.component';

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
        <app-auth-remember (checked)="rememberUser($event)"></app-auth-remember>
        <button  type="submit">Login</button>
      </app-auth-form>
      <hr>
      <h1>Dynamic component</h1>
      <button (click)="onDestroyComponent()">Destroy component</button>
      <button (click)="onMoveComponent()">Move component</button>
      <div #entry></div>
      <hr>
      <div #entry2>
        Template:
        <ng-template let-foo let-location="location" #tmp>
          {{foo}} : {{location}}
        </ng-template>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('entry', { read: ViewContainerRef }) entry!: ViewContainerRef;
  @ViewChild('entry2', { read: ViewContainerRef }) entry2!: ViewContainerRef;
  @ViewChild('tmp') tmpl!: TemplateRef<any>

  component!: ComponentRef<AuthFormComponent>;
  title = 'AngularProApp';

  constructor() { }

  ngAfterViewInit(): void {
    this.component = this.entry.createComponent(AuthFormComponent);
    this.component.instance.title = 'Create Account';
    this.component.instance.submitted.subscribe(this.loginUser);
    this.entry2.createEmbeddedView(this.tmpl, {
      $implicit: 'Miguel Vargas',
      location: 'COL, MED'
    });
  }

  createUser(user: User) {
    console.log("Create User:", user);
  }

  loginUser(user: User) {
    console.log("Login User:", user);
  }

  rememberUser(event: boolean) {
    console.log("remember User:", event);
  }

  onDestroyComponent() {
    this.component.destroy();
  }

  onMoveComponent() {
    this.entry.move(this.component.hostView, 0);
  }
}
