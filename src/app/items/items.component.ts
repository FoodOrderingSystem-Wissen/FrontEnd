import { Component } from '@angular/core';
import { ItemsServiceService } from '../items-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  constructor(private router: Router, private itemsService: ItemsServiceService) {
  }

  arrayOfItems: any;
  // retrieve all the restaurants in the database
  id: string = "1";

  ngOnInit(): void {
    this.getItems(this.id)
  }

  getItems(id: string) {
    this.itemsService.getItems(id).subscribe((response) => {
      console.log("Successfully retrieved item details")
      this.arrayOfItems = response;
      // console.log(this.arrayOfItems[0].name)
    }, (error) => {
      alert("Failed loading item details!")
      console.log(error)
      console.log(error.error.text)
    });
  }
}

