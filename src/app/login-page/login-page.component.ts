import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, IonInput } from '@ionic/angular';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  constructor(private router: Router, private renderer: Renderer2) {
  }

  //CustomerLoginRegisterForm
  loginRegisterForm: boolean = true;
  logReg: boolean = false;
  customerRegister = () => this.logReg = true
  customerLogin = () => this.logReg = false
  closingCustomerLoginForm = () => { this.loginRegisterForm = false; this.logReg = false }
  //Redirecting to Merchant
  merchant = () => this.router.navigate(['/merchant']);

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
}
