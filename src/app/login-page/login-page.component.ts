import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer-service.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  constructor(private router: Router, private customerService: CustomerService) {
  }

  // show only login or signup
  showLogin = true;
  showRegistration = false;

  showRegistrationForm() {
    this.showLogin = false;
    this.showRegistration = true;
  }

  showLoginForm() {
    this.showLogin = true;
    this.showRegistration = false;
  }

  // show or hide the text in password input field
  password: string | undefined;

  show = false;

  ngOnInit() {
    this.checkIfLoggedIn();
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

  // login and register with backend and service
  login(email: string, password: string) {
    this.customerService.login(email, password).subscribe((response) => {
      // handle successful login
      console.log(response)
      localStorage.setItem('loggedIn', 'true')
      this.router.navigateByUrl('/Home');
    }, (error) => {
      // handle login error
      alert("Error! Login Failed.")
      console.log(error.error.text)
    });
  }

  register(email: string, password: string, name: string, contact: string, address: string) {
    this.customerService.register(email, password, name, contact, address).subscribe((response) => {
      // handle successful registration
      alert("Successfully Signed Up, Please login.")
      console.log(response)
    }, (error) => {
      // handle registration error
      alert("Sign up failed")
      console.log(error.error.text)
    });
  }

  // Checkign if user is already logged in
  checkIfLoggedIn() {
    if (localStorage.getItem('loggedIn') == 'true') {
      this.router.navigateByUrl('/Home');
    }
  }

}
