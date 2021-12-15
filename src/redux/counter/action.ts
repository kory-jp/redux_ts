import { ActionTypes } from "../actionTypes";
import { Count, CountActionTypes } from "./types";

// CountActionTypesが戻り値であることを型定義している
//types/ export type CountActionTypes = incrementAction | decrementAction;
export const increment = (countState: Count): CountActionTypes => {
  return {
    // actionTypesでconstAssertionを使用しているので別の変数に
    // 代入しても型が失わない*1
    // incrementActionが戻り値になっている
    type: ActionTypes.incremant,
    payload: countState
  };
};

export const decrement = (countState: Count): CountActionTypes => {
  return {
    type: ActionTypes.decremant,
    payload: countState
  };
};
