import useToggle from "../../../hooks/use-toggle";
import { BsFillCartFill } from "react-icons/bs";
import Modal from "../../layout/modal/Modal";
import Cart from "../cart/Cart";
import { useContext } from "react";
import { CartCtx } from "../../../contexts/cart-ctx";
import { getNumOfItemsInCart } from "../../../helpers/cart";
import css from "./CartBtn.module.css";


const CartBtn = () => {

  const cart = useContext(CartCtx);
  const [isCartOpen, toggleIsCartOpen] = useToggle(false);
  const numOfItemsInCart = getNumOfItemsInCart(cart);

  return (
    <>
      <button className={css.root} type="button" onClick={toggleIsCartOpen}>
        <BsFillCartFill className={css.icon} />
        <h4>Your cart</h4>
        <strong>{numOfItemsInCart}</strong>
      </button>
      {isCartOpen && (
        <Modal onClick={toggleIsCartOpen}> 
          <Cart onClose={toggleIsCartOpen} />
        </Modal>
      )}
    </>
  )
}

export default CartBtn;