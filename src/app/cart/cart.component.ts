import { Component, OnInit } from '@angular/core';
import { Cup, cups } from '../products/Cup';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  cups: Cup[] = cups

  constructor() { }

  ngOnInit(): void {
  }

}
