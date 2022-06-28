import { useContext } from "react";
import { CartDispatch } from "../../../../../contexts/cart-ctx";
import { CartItemProps } from "../../../../../models/props";
import { CartReducerActionType } from "../../../../../models/reducers";
import css from "./CartItem.module.css";
import CartItemDetails from "./cartItemDetails/CartItemDetails";
import CartItemOptions from "./cartItemOptions/CartItemOptions";
import { memo } from "react";

const CartItem = ({id, name, price, quantity }: CartItemProps) => {

  const dispatch = useContext(CartDispatch);

  const handleRemoveItem = () => {
    dispatch({ type: CartReducerActionType.UPDATE_ITEM_QUANTITY, id, quantity: -1 });
  }
  
  const handleAddItem = () => {
    dispatch({ type: CartReducerActionType.UPDATE_ITEM_QUANTITY, id, quantity: 1 });
  }

  return (
    <li className={css.root}>
      <CartItemDetails name={name} price={price} quantity={quantity} />
      <CartItemOptions onAdd={handleAddItem} onRemove={handleRemoveItem} />
    </li>
  )
}

export default memo(CartItem);