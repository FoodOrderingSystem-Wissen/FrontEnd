import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-merchant-login',
  templateUrl: './merchant-login.component.html',
  styleUrls: ['./merchant-login.component.css']
})
export class MerchantLoginComponent {
  constructor(private router: Router) {
  }
  // undraw illustratoin
  images = [
    "./assets/undraw_stepping_up_g6oo.svg"
  ]
  // 
  // Show login or register form
  displayLogin: boolean = false;
  displayRegistration: boolean = false;

  // displays login form over registration form
  displayLoginForm() {
    this.displayLogin = true;
    this.displayRegistration = false;
  }

  // displays registration form over login form
  displayRegistrationForm() {
    this.displayLogin = false;
    this.displayRegistration = true;
  }
  // 
  // close form
  closeForm() {
    this.displayLogin = false;
    this.displayRegistration = false;
  }
  // 
  // hide/unhide password start
  password: string | undefined;

  show = false;

  ngOnInit() {
    this.password = 'password';
  }

  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }
  // hide/unhide password end
}
