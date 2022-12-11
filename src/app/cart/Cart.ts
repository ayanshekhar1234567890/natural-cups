import { Cup, cups } from "../products/Cup";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { app } from "src/main";
import * as sha512 from 'js-sha512';

export var cartArray: Cup[] = [];

export function addItems(cup: Cup) {
    cartArray.push(cup)
    sessionStorage.setItem('cartItems', JSON.stringify(cartArray))
}

export function getCartItems() {
    let data = sessionStorage.getItem('cartItems')
    if (data) return JSON.parse(data)
}

export function deleteCartItems() {
    sessionStorage.removeItem('cartItems')
}

export function hasher(input: string) {
    sha512.sha512(input);
}

export async function buy(cup: Cup, address: string) {
    let rawData = sessionStorage.getItem('cartItems')
    const db = getFirestore(app);
    if (rawData) {
        try {
            const docRef = await addDoc(collection(db, Date()), {
                name: cup.name,
                price: cup.price,
                address: address,
                date: Date()
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
}