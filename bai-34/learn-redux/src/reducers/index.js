import { counterReducer } from "./counter";

import { combineReducers } from "redux";
import { todosReducer } from "./todos";

const allReducers = combineReducers ({
  counterReducer,
  todosReducer
  // Add more reducers
});

export default allReducers;
