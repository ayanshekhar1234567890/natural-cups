import { Component, OnInit } from '@angular/core';
import { addItems } from '../cart/Cart';
import { Cup, cups } from './Cup';
import { Option } from './Option';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  cups: Cup[] = cups;
  options: Option[] = [
    { key: 1 },
    { key: 2 },
    { key: 3 },
    { key: 4 },
    { key: 5 },
    { key: 6 },
    { key: 7 },
    { key: 8 },
    { key: 9 },
    { key: 10 }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  click(option: Option, cup: Cup) {
    if (option.key = 1)   { cup.quantity  =  1 }
    if (option.key = 2)   { cup.quantity  =  2 }
    if (option.key = 3)   { cup.quantity  =  3 }
    if (option.key = 4)   { cup.quantity  =  4 }
    if (option.key = 5)   { cup.quantity  =  5 }
    if (option.key = 6)   { cup.quantity  =  6 }
    if (option.key = 7)   { cup.quantity  =  7 }
    if (option.key = 8)   { cup.quantity  =  8 }
    if (option.key = 9)   { cup.quantity  =  9 }
    if (option.key = 10)  { cup.quantity  =  10 }
  }

  cart(cup: Cup, inp: HTMLInputElement) {
    let cupo = new Cup(cup.name, cup.desc, cup.price, cup.imageLink, cup.buyLink, Number.parseInt(inp.value))
    addItems(cupo)
  }

}
