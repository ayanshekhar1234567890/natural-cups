import { Cup, cups } from "../products/Cup";

export var cartArray: Object[] = cups;

export function addItems(cup: Cup) {
    cartArray.push(cup)
    localStorage.setItem('cartItems', JSON.stringify(cartArray))
}

export function getCartItems() {
    let data = localStorage.getItem('cartItems')
    if (data) return JSON.parse(data)
}