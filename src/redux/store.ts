import { combineReducers, createStore } from "redux";
import { CountReducer } from "./counter/reducer";

// Appにてimport
export default function createState() {
  return createStore(
    combineReducers({
      count: CountReducer
    })
  );
}
