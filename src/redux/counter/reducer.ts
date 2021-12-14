// 値の更新、初期値の定義
import { ActionTypes } from "../actionTypes";
import { Count, CountActionTypes } from "./types";

const initilaState: Count = {
  value: 0
};

export const CountReducer = (
  state = initilaState,
  //以下でactionとして受け取れるのは以下のアクションだけと定義している
  // export type CountActionTypes = incrementAction | decrementAction;
  action: CountActionTypes
  // 戻り値としてstate.value + 1, state.value - 1が戻ってくることを型指定
): Count => {
  switch (action.type) {
    case ActionTypes.incremant:
      return { ...state, value: state.value + 1 };
    case ActionTypes.decremant:
      return { ...state, value: state.value - 1 };
  }
  return state;
};
