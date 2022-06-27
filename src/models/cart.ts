import { MenuItem } from "./menu";

interface CartItem extends MenuItem {
  quantity: number;
}

export interface Cart {
  [id: string]: CartItem;
}