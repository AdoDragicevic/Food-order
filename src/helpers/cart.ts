import { Cart } from "../models/cart";

export const getNumOfItemsInCart = (cart: Cart) => {
  let num = 0;
  for (let key in cart) num += cart[key].quantity;
  return num;
}

export const getTotalCartPrice = (cart: Cart) => {
  let sum = 0;
  for (let key in cart) {
    const { price, quantity } = cart[key];
    sum += price * quantity;
  }
  return sum;
}