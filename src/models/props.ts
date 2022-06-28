import { FormEvent, ReactNode } from "react";
import { Cart, CartItem } from "./cart";
import { MenuItem } from "./menu";

export interface ChildrenProp {
  children: ReactNode;
}

export interface MenuItemProps extends MenuItem {}

export interface MenuItemDetailsProps {
  name: string;
  description: string;
  price: number;
}

export interface MenuItemFormProps extends MenuItem {}

export interface ButtonProps extends ChildrenProp{
  size: "sm" | "md" | "lg";
  bg: "fill" | "empty";
  onClick: (e: any) => void;
}

export interface ModalProps extends ChildrenProp{
  onClick: () => void;
}

export interface CartProps {
  onClose: () => void;
}

export interface CartListProps {
  cart: Cart;
}

export interface CartItemProps extends CartItem {}

export interface CartItemDetailsProps {
  name: string;
  price: number;
  quantity: number;
}

export interface CartItemOptionsProps {
  onAdd: () => void;
  onRemove: () => void;
}

export interface CartBtnsProps {
  onClose: () => void;
  onOrder: () => void;
}