import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { Foods } from '../mock-food';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

foods = Foods;
onSelected :Food;
grandTotal=0;


  constructor() { 
     
  }

  ngOnInit() {
      this.grandTotal=0;
     for(let abc in Foods){
          this.grandTotal+=Foods[abc].price*Foods[abc].qty;
    }
  }

  onSelect(food : Food): void{
    this.onSelected = food;
     this.grandTotal=0;
     for(let abc in Foods){
          this.grandTotal+=Foods[abc].price*Foods[abc].qty;
    }
  }
  
}
