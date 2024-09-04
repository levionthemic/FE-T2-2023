import { combineReducers } from "redux";
import { cartReducer } from "./cart";

const allReducers = combineReducers ({
  cartReducer,
  // Add more reducers
});

export default allReducers;
