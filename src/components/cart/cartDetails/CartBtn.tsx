import { BsFillCartFill } from "react-icons/bs";
import css from "./CartBtn.module.css";

const CartBtn = () => {
  return (
    <button className={css["cart-btn"]} type="button">
      <BsFillCartFill className={css.icon} />
      <h4 className={css["cart-btn__title"]}>Your cart</h4>
      <strong className={css["cart-btn__num"]}>4</strong>
    </button>
  )
}

export default CartBtn;