import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MerchantServiceService } from '../merchant-service.service';

@Component({
  selector: 'app-merchant-login',
  templateUrl: './merchant-login.component.html',
  styleUrls: ['./merchant-login.component.css']
})
export class MerchantLoginComponent {
  constructor(private router: Router, private merchantService: MerchantServiceService) {
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


  // login and register with backend and service

  login(email: string, password: string) {
    this.merchantService.login(email, password).subscribe((response) => {
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
  register(email: string, password: string, name: string, passwordAgain: string) {
    if (password == passwordAgain) {
      this.merchantService.register(email, password, name).subscribe((response) => {
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
    else {
      alert("Password did not match in both fields!!");
    }
  }
}
