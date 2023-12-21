import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  title = 'Hello';
  isAdmin: boolean = true;
  changeAdmin() {
    this.isAdmin = !this.isAdmin;
  }
}
