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

  cart(cup: Cup, inp: HTMLInputElement) {
    let cupo = new Cup(cup.name, cup.desc, cup.price, cup.imageLink, cup.buyLink, Number.parseInt(inp.value))
    addItems(cupo)
  }

}
