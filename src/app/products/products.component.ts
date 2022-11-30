import { Component, OnInit } from '@angular/core';
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
    if (option.key = 1) { cup.quantity = "01" }
    if (option.key = 2) { cup.quantity = "02" }
    if (option.key = 3) { cup.quantity = "03" }
    if (option.key = 4) { cup.quantity = "04" }
    if (option.key = 5) { cup.quantity = "05" }
    if (option.key = 6) { cup.quantity = "06" }
    if (option.key = 7) { cup.quantity = "07" }
    if (option.key = 8) { cup.quantity = "08" }
    if (option.key = 9) { cup.quantity = "09" }
    if (option.key = 10) { cup.quantity = "10" }
  }

}
