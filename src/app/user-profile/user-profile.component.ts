import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  title = 'Hello';
  isAdmin: boolean = true;
  changeAdmin() {
    this.isAdmin = !this.isAdmin;
  }
  user = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: '',
    photo: 'https://xsgames.co/randomusers/avatar.php?g=male',
  };
  hiddenAge = false;
  showAge() {
    this.hiddenAge = !this.hiddenAge;
  }
}
