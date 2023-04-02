import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  //images
  images = [
    "./assets/homePageBG.jpg",
    "./assets/homePageBG1.jpg",
    "./assets/homePageBG1a.jpg",
    "./assets/homePageBG1b.jpg",
    "./assets/homePageBG2.jpg",
    "./assets/homePageBG2a.jpg",
    "./assets/homePageBG.jpg"
  ]
}
