import { ReactNode } from "react";
import { MenuItem } from "./menu";

export interface ChildrenProp {
  children: ReactNode;
}

export type MenuItemProps = MenuItem;

export interface MenuItemDetailsProps {
  name: string;
  description: string;
  price: number;
}

export interface MenuItemFormProps {
  id: string;
}

export interface ButtonProps extends ChildrenProp{
  type: "button" | "submit";
  size: "sm" | "md" | "lg";
}

export interface ModalProps extends ChildrenProp{
  onClick: () => void;
}