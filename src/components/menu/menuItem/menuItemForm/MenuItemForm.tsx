import { FormEvent, useRef } from "react";
import Button from "../../../UI/button/Button";
import { MenuItemFormProps } from "../../../../models/props";
import css from "./MenuItemForm.module.css";
import { useContext } from "react";
import { CartDispatch } from "../../../../contexts/cart-ctx";
import { CartReducerActionType } from "../../../../models/reducers";

const MenuItemForm = (props: MenuItemFormProps) => {

  const amountRef = useRef<HTMLInputElement>(null);
  const dispatch = useContext(CartDispatch);

  const handleAddToCart = (e: FormEvent) => {
    e.preventDefault();
    const quantity = +amountRef.current!.value;
    dispatch({ type: CartReducerActionType.ADD_ITEM, item: props, quantity });
  }

  return (
    <form className={css.root}>
      <div>
        <label htmlFor="amount">Amount</label>
        <input 
          id="amount"
          type="number" 
          step={1} 
          min={1} 
          max={20} 
          defaultValue={1} 
          ref={amountRef} 
        />
      </div>
      <Button size="md" bg="fill" onClick={handleAddToCart}>
        + Add
      </Button>
    </form>
  )
}

export default MenuItemForm;