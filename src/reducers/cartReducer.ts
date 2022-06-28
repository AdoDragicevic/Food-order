import { addNewItem, updateItemQuantity } from "../helpers/cart";
import { CartReducer, CartReducerActionType } from "../models/reducers";

const cartReducer: CartReducer = (state, action) => {
  switch (action.type) {
    case(CartReducerActionType.ADD_ITEM):
      return addNewItem(state, action.item, action.quantity);
    case(CartReducerActionType.UPDATE_ITEM_QUANTITY):
      return updateItemQuantity(state, action.id, action.quantity);
    case(CartReducerActionType.EMPTY_CART):
      return {};
    default:
      return state;
  }
}

export default cartReducer;