import { Component } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { CustomerService } from '../customer-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public restaurantService: RestaurantService, private custService: CustomerService, private router: Router) { }
  //images
  image = [
    "./assets/customerHomePage.jpg"
  ]

  foodImages = [
    "./assets/subway.jpg",
    "./assets/kfc.jpg",
    "./assets/food1.jpg",
    "./assets/food2.jpg",
    "./assets/food3.jpg",
    "./assets/food4.jpg",
    "./assets/food5.jpg",
    "./assets/food6.jpg"
  ]

  ngOnInit() {
    // checks for login status
    // if customer logged in, then only they can acccess the page
    this.checkLoginStatus()
    this.getAllRestaurants();
  }

  // retrieve all the restaurants in the database
  arrayOfRestaurants: any;
  // index to iterate through the images
  imageIndex: number = 0;
  getAllRestaurants() {
    this.restaurantService.getAllRestaurants().subscribe((response) => {
      console.log("Successfully retrieved restaurant details")
      this.arrayOfRestaurants = response;
    }, (error) => {
      alert("Failed loading restaurant details!")
      // console.log(error)
      // console.log(error.error.text)
    });
  }

  // check if user is already logged in
  checkLoginStatus() {
    if (localStorage.getItem('loggedIn') != 'true') {
      this.router.navigateByUrl('/');
    }
  }

  logout() {
    localStorage.setItem('loggedIn', 'false');
  }

}
