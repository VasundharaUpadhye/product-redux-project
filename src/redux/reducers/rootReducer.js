import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

export const reducer = combineReducers({
  products: productReducer,
});
