import { MenuItemDetailsProps } from "../../../../models/props";
import css from "./MenuItemDetails.module.css";

const MenuItemDetails = ({ name, description, price }: MenuItemDetailsProps) => (
  <article className={css.root}>
    <h2>{name}</h2>
    <p> <em>{description}</em> </p>
    <h4>${price}</h4>
  </article>
)

export default MenuItemDetails;