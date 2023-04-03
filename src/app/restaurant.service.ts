import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  constructor(private http: HttpClient) { }

  getAllRestaurants() {
    return this.http.get('http://localhost:8090/api/restaurants/getAllRestaurant', {});
  }

  // register(email: string, password: string, name: string, contact: string, address: string) {
  //   return this.http.post('http://localhost:8090/api/customers/register', { email, password, name, contact, address });
  // }
}
