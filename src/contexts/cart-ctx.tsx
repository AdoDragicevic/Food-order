import { createContext, Dispatch, useReducer } from "react";
import DUMMY_CART from "../data/cart";
import { Cart } from "../models/cart";
import { ChildrenProp } from "../models/props";
import { CartReducerAction } from "../models/reducers";
import cartReducer from "../reducers/cartReducer";


export const CartCtx = createContext<Cart>({});

export const CartDispatch = createContext<Dispatch<CartReducerAction>>(() => {});

export const CartProvider = ({ children }: ChildrenProp) => {

  const [cart, dispatch] = useReducer(cartReducer, DUMMY_CART);

  return (
    <CartDispatch.Provider value={dispatch}>
      <CartCtx.Provider value={cart}>
        {children}
      </CartCtx.Provider>
    </CartDispatch.Provider>
  )
}