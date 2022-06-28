import CartList from "./cartList/CartList";
import CartBtns from "./cartBtns/CartBtns";
import { CartProps } from "../../../models/props";
import { useContext } from "react";
import { CartCtx } from "../../../contexts/cart-ctx";
import { getTotalCartPrice } from "../../../helpers/cart";
import TotalAmount from "../../UI/totalAmount/TotalAmount";
import css from "./Cart.module.css";


const Cart = ({ onClose }: CartProps) => {

  const cart = useContext(CartCtx);
  const price = getTotalCartPrice(cart);
  const formatedPrice = parseFloat(price.toString()).toFixed(2);

  const handleOrder = () => console.log(cart);

  return (
    <article className={css.root} onClick={e => e.stopPropagation()}>
      <CartList cart={cart} />
      <TotalAmount>${formatedPrice}</TotalAmount>
      <CartBtns onClose={onClose} onOrder={handleOrder} />
    </article>
  )
}

export default Cart;