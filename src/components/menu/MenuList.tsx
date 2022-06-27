import MenuItem from "./menuItem/MenuItem";
import DUMMY_MENU from "../../data/menu";
import css from "./MenuList.module.css";

const MenuList = () => {

  const items = DUMMY_MENU.map(item => <MenuItem key={item.id} {...item} />);

  return (
    <ul className={css.root}>
      {items}
    </ul>
  )
}

export default MenuList;