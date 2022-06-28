import { Reducer } from "react";
import { Cart } from "./cart";
import { MenuItem } from "./menu";

export type CartReducer = Reducer<Cart, CartReducerAction>;

export type CartReducerAction = AddItem | UpdateItemQuantity | EmptyCart; 

export enum CartReducerActionType {
  ADD_ITEM,
  UPDATE_ITEM_QUANTITY,
  EMPTY_CART
}
interface AddItem {
  type: CartReducerActionType.ADD_ITEM;
  item: MenuItem;
  quantity: number;
}
interface UpdateItemQuantity {
  type: CartReducerActionType.UPDATE_ITEM_QUANTITY;
  id: string;
  quantity: number;
}
interface EmptyCart {
  type: CartReducerActionType.EMPTY_CART;
}