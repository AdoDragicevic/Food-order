import CartItem from "./cartItem/CartItem";
import { CartListProps } from "../../../../models/props";
import css from "./CartList.module.css";

const CartList = ({ cart }: CartListProps) => {
  
  const items = Object.values(cart).map(item => <CartItem key={item.id} {...item} />);

  return (
    <ul className={css.root}>
      {items}
    </ul>
  );
}

export default CartList;