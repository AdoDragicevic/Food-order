import { Reducer } from "react";
import { Cart } from "./cart";

export enum CartReducerActionType {
  ADD,
  REMOVE,
  EMPTY
}

export type CartReducerAction = AddOrRemove | Empty; 

export type CartReducer = Reducer<Cart, CartReducerAction>;

interface AddOrRemove {
  type: CartReducerActionType.ADD | CartReducerActionType.REMOVE;
  id: string;
}

interface Empty {
  type: CartReducerActionType.EMPTY;
}