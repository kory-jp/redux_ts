import { ActionTypes } from "../actionTypes";
import { CountActionTypes } from "./types";

export const increment = (): CountActionTypes => {
  return {
    type: ActionTypes.incremant
  };
};

export const decrement = (): CountActionTypes => {
  return {
    type: ActionTypes.decremant
  };
};
