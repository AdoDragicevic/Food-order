import useToggle from "../../../hooks/use-toggle";
import { BsFillCartFill } from "react-icons/bs";
import Modal from "../../layout/modal/Modal";
import css from "./CartBtn.module.css";

const CartBtn = () => {

  const [isCartOpen, toggleIsCartOpen] = useToggle(false);

  return (
    <>
      <button className={css.root} type="button" onClick={toggleIsCartOpen}>
        <BsFillCartFill className={css.icon} />
        <h4>Your cart</h4>
        <strong>4</strong>
      </button>
      {isCartOpen && (
        <Modal onClick={toggleIsCartOpen}> 
          
        </Modal>
      )}
    </>
  )
}

export default CartBtn;