import { useRef } from "react";
import Button from "../../../UI/button/Button";
import { MenuItemFormProps } from "../../../../models/props";
import css from "./MenuItemForm.module.css";

const MenuItemForm = ({ id}: MenuItemFormProps) => {

  const amountRef = useRef<HTMLInputElement>(null);

  return (
    <form className={css.root} action="">
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
      <Button type="submit" size="md">
        + Add
      </Button>
    </form>
  )
}

export default MenuItemForm;