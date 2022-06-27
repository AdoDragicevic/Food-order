import { Cart } from "../models/cart";

const DUMMY_CART: Cart = {
  "1": {
    quantity: 1,
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  "2": {
    quantity: 1,
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  "3": {
    quantity: 2,
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  }
}

export default DUMMY_CART;
