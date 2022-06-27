import CartDetails from "../../cart/cartDetails/CartBtn";
import css from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={css.nav}>
      <h2>ReactMeals</h2>
      <CartDetails />
    </nav>
  )
}

export default Nav;