import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  // isLoggedIn: Boolean = false;

  login(email: string, password: string) {
    return this.http.post('http://localhost:8090/api/customers/login', { email, password });
  }

  register(email: string, password: string, name: string, contact: string, address: string) {
    return this.http.post('http://localhost:8090/api/customers/register', { email, password, name, contact, address });
  }

  isAuthenticated() {
    return localStorage.getItem('loggedIn');
  }
}
