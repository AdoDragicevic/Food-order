import CartBtn from "../../cart/cartBtn/CartBtn";
import css from "./Nav.module.css";

const Nav = () => (
  <nav className={css.root}>
    <h2>ReactMeals</h2>
    <CartBtn />
  </nav>
)

export default Nav;