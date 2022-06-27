import { ButtonProps } from "../../../models/props";
import css from "./Button.module.css";

const Button = ({ type, size, children }: ButtonProps) => (
  <button className={`${css.root} ${css[size]}`} type={type}>
    {children}
  </button>
);

export default Button;