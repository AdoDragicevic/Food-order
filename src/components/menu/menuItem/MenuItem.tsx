import MenuItemDetails from "./menuItemDetails/MenuItemDetails";
import MenuItemForm from "./menuItemForm/MenuItemForm";
import { MenuItemProps } from "../../../models/props"
import css from "./MenuItem.module.css";

const MenuItem = (props: MenuItemProps) => {
  return (
    <li className={css.root}>
      <MenuItemDetails {...props} />
      <MenuItemForm {...props} />
    </li>
  )
}

export default MenuItem;