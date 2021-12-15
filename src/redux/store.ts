import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { CountReducer } from "./counter/reducer";
import { TodoReducer } from "./todo/reducer";

// Appにてimport
export default function createState() {
  return createStore(
    combineReducers({
      count: CountReducer,
      todo: TodoReducer
    }),
    applyMiddleware(thunk)
  );
}
