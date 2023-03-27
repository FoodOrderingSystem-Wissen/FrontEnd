import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginRegisterForm:boolean=false;
  logReg:boolean=false;
  customerLoginRegisterForm=()=>this.loginRegisterForm=true
  customerRegister=()=>this.logReg=true
  customerLogin=()=>this.logReg=false
  closingCustomerLoginForm=()=>this.loginRegisterForm=false
}
