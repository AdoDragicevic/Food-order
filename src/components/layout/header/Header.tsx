import HeaderAbout from "./headerAbout/HeaderAbout";
import css from "./Header.module.css";

const Header = () => (
  <header className={css.header}>
    <div className={css["bg-img"]} />
    <HeaderAbout />
  </header>
)

export default Header;