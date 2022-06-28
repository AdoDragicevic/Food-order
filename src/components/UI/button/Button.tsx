import { ButtonProps } from "../../../models/props";
import css from "./Button.module.css";

const Button = ({ children, size, bg, onClick }: ButtonProps) => (
  <button 
    className={`${css.root} ${css[size]} ${css[bg]}`} 
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);

export default Button;