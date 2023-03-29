import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-merchant-login',
  templateUrl: './merchant-login.component.html',
  styleUrls: ['./merchant-login.component.css']
})
export class MerchantLoginComponent {
  constructor(private router:Router){
  }
  merchantBody:boolean=false;
  merchantLogin:boolean=false;
  backToCustometPage=()=>this.router.navigate(['/customer']);
  merchantBodyOpen=()=>this.merchantBody=true
  merchantBodyClose=()=>{this.merchantBody=false; this.merchantLogin=false}
  merchantRegister=()=>this.merchantLogin=true
  Login=()=>this.merchantLogin=false
}
