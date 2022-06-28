import Button from "../../../../../UI/button/Button";
import { CartItemOptionsProps } from "../../../../../../models/props";
import css from "./CartItemOptions.module.css";


const CartItemOptions = ({ onAdd, onRemove }: CartItemOptionsProps) => {
  return (
    <div className={css.root}>
      <Button bg="empty" size="sm" onClick={onRemove}>
        -
      </Button>
      <Button bg="empty" size="sm" onClick={onAdd}>
        +
      </Button>
    </div>
  )
}

export default CartItemOptions;