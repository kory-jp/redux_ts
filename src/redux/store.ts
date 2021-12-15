import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { CountReducer } from "./counter/reducer";

// Appにてimport
export default function createState() {
  return createStore(
    combineReducers({
      count: CountReducer
    }),
    applyMiddleware(thunk)
  );
}
