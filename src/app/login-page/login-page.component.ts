import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private router:Router){
  }

  //CustomerLoginRegisterForm
  loginRegisterForm:boolean=true;
  logReg:boolean=false;
  customerRegister=()=>this.logReg=true
  customerLogin=()=>this.logReg=false
  closingCustomerLoginForm=()=>{this.loginRegisterForm=false; this.logReg=false}
  //Redirecting to Merchant
  merchant=()=> this.router.navigate(['/merchant']);

}
