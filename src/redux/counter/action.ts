import { ActionTypes } from "../actionTypes";
import { CountActionTypes } from "./types";

export const increment = (): CountActionTypes => {
  return {
    // actionTypesでconstAssertionを使用しているので別の変数に
    // 代入しても型が失わない*1
    type: ActionTypes.incremant
  };
};

export const decrement = (): CountActionTypes => {
  return {
    type: ActionTypes.decremant
  };
};
