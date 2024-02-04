import { AfterViewInit, Component, ComponentRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { User } from './models/User';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { FileSizePipe } from './pipes/filesize.pipe';

interface File {
  name: string,
  size: string,
  type: string
}

@Component({
  selector: 'app-root',
  template: `
    <div>
      <!-- <app-auth-form (submitted)="createUser($event)">
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
      <hr>
      <div>
        <label for="creditCard">Credit Card: </label>
        <input type="text" placeholder="Credit Card" name="creditCard" credit-card>
      </div>
      <hr>
      <div>
        Custom Pipes
        <div *ngFor="let file of mapped">
          <p>{{file.name}}</p>
          <p>{{file.size}} </p>
        </div>
      </div>
      <hr>
      <hr> -->
      <div>
        <h1>Reactive Forms Angular</h1>
        <div>
          <app-stock-inventory></app-stock-inventory>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('entry', { read: ViewContainerRef }) entry!: ViewContainerRef;
  @ViewChild('entry2', { read: ViewContainerRef }) entry2!: ViewContainerRef;
  @ViewChild('tmp') tmpl!: TemplateRef<any>

  component!: ComponentRef<AuthFormComponent>;
  title = 'AngularProApp';

  files: File[] = [];
  mapped: File[] = [];

  constructor(private fileSizePipe: FileSizePipe) { }

  ngOnInit(): void {
    this.files = [
      {name: 'First file', size: '2120109', type: 'image/svg'}
    ]
    this.mapped = this.files.map(item => {
      return {
        name: item.name,
        type: item.type,
        size: this.fileSizePipe.transform(item.size, 'mb')
      }
    });
  }

  ngAfterViewInit(): void {
    this.component = this.entry.createComponent(AuthFormComponent);
    //this.component.instance.title = 'Create Account';
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
