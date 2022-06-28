import { Cart } from "../models/cart";
import { MenuItem } from "../models/menu";

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

export const updateItemQuantity = (cart: Cart, id: string, quantity: number): Cart => {
  const cartCopy = { ...cart };
  const newQuantity = cartCopy[id].quantity + quantity;
  if (newQuantity < 1) delete cartCopy[id];
  else cartCopy[id] = { ...cart[id], quantity: newQuantity };
  console.log(cartCopy);
  return cartCopy;
}

export const addNewItem = (cart: Cart, item: MenuItem, quantity: number): Cart => {
  if (item.id in cart) return updateItemQuantity(cart, item.id, quantity);
  const cartCopy = { ...cart };
  cartCopy[item.id] = { ...item, quantity };
  console.log(cartCopy);
  return cartCopy;
}