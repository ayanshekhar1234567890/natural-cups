import { Component, OnInit } from '@angular/core';
import { Cup } from './Cup';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  cups!: Cup[]

  constructor() {
    this.cups = []
  }

  ngOnInit(): void {
  }

}
