import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-auth-remember',
  templateUrl: './auth-remember.component.html',
  styleUrls: ['./auth-remember.component.css']
})
export class AuthRememberComponent {
  @Output() checked: EventEmitter<boolean> = new EventEmitter();
  onChecked(check: any) {
    this.checked.emit(check.checked ? check.checked : false);
  }
}
