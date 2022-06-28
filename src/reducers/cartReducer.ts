
import { CartReducer, CartReducerActionType } from "../models/reducers";

const cartReducer: CartReducer = (state, action) => {
  switch (action.type) {
    case(CartReducerActionType.ADD):
      return state;
    case(CartReducerActionType.REMOVE):
      return state;
    case(CartReducerActionType.EMPTY):
      return state;
    default:
      return state;
  }
}

export default cartReducer;