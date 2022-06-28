import { CartItemDetailsProps } from "../../../../../../models/props";
import css from "./CartItemDetails.module.css";

const CartItemDetails = ({ name, price, quantity }: CartItemDetailsProps) => (
  <article className={css.root}>
    <h2>{name}</h2>
    <div className={css.details}>
      <span className={css.price}>
        ${price}
      </span>
      <span className={css.quantity}>
        x{quantity}
      </span>
    </div>
  </article>
);

export default CartItemDetails;