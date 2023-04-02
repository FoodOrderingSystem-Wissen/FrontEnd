import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MerchantServiceService {

  constructor(private http: HttpClient) { }

  // connecting to backend --> Spring JPA (API)

  login(email: string, password: string) {
    return this.http.post('http://localhost:8090/api/restaurants/login', { email, password });
  }

  register(email: string, password: string, name: string) {
    return this.http.post('http://localhost:8090/api/restaurants/register', { email, password, name });
  }
}
