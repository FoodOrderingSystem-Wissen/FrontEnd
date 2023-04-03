import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsServiceService {
  constructor(private http: HttpClient) { }

  getItems(restaurantID: string) {
    return this.http.post('http://localhost:8090/api/items/getItemsOfARestaurant', { restaurantID });
  }
  
}

