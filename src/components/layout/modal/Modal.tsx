import { createPortal } from "react-dom";
import { ModalProps } from "../../../models/props";
import css from "./Modal.module.css";

const Modal = ({ children, onClick }: ModalProps) => (
  <div className={css.root} onClick={onClick}>
    <main>{children}</main>
  </div>
);

const portalRoot = document.querySelector("#modal-root");
if (!portalRoot) throw new Error("add div with id 'modal-root' to index.html");
const ModalPortal = (props: ModalProps) => createPortal(<Modal {...props} />, portalRoot);
export default ModalPortal;