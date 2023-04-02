import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer-service.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  constructor(private router: Router, private renderer: Renderer2, private customerService: CustomerService) {
  }
  //Redirecting to Merchant
  merchant = () => this.router.navigate(['/merchant']);

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
      alert("logged in!")
      console.log(response)

    }, (error) => {
      // handle login error
      alert("Failed")
      console.log(error.error.text)
    });
  }
  errorV: any
  register(email: string, password: string, name: string, contact: string, address: string) {
    this.customerService.register(email, password, name, contact, address).subscribe((response) => {
      // handle successful registration
      alert("Successfully Signed Up")
      console.log(response)
    }, (error) => {
      // handle registration error
      alert("Sign up failed")
      this.errorV = error

      console.log(error.error.text)
    });
  }

}
