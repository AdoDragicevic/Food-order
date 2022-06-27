import CartBtn from "../../cart/cartDetails/CartBtn";
import css from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={css.nav}>
      <h2 className={css.nav__title}>ReactMeals</h2>
      <CartBtn />
    </nav>
  )
}

export default Nav;