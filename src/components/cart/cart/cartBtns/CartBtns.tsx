import Button from "../../../UI/button/Button";
import { CartBtnsProps } from "../../../../models/props";
import css from "./CartBtns.module.css";

const CartBtns = ({ onClose, onOrder }: CartBtnsProps) => (
  <div className={css.root}>
    <Button size="lg" bg="empty" onClick={onClose}>
      Close
    </Button>
    <Button size="lg" bg="fill" onClick={onOrder}>
      Order
    </Button>
  </div>
);

export default CartBtns;