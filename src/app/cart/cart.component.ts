import { Component, OnInit } from '@angular/core';
import { Cup, cups } from '../products/Cup';
import { buy, cartArray, deleteCartItems } from './Cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cups: Cup[] = cups
  carts: Cup[] = cartArray

  deleteItems(cup: Cup) {
    deleteCartItems()
  }
  buy(cup: Cup, address: string) {
    buy(cup, address)
  }

  constructor() { }

  ngOnInit(): void {
    let a = sessionStorage.getItem('cartItems')
    if (a) {
      if (this.carts = []) {
        this.carts = JSON.parse(a)
      }
    }
  }

}
