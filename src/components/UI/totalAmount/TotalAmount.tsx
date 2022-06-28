import { ChildrenProp } from "../../../models/props"
import css from "./TotalAmount.module.css";

const TotalAmount = ({ children }: ChildrenProp) => (
  <article className={css.root}>
    <h2>Total Amount</h2>
    <h2>{children}</h2>
  </article>
);

export default TotalAmount;