import { ActionTypes } from "../actionTypes";
import { Count, CountActionTypes } from "./types";

const initilaState: Count = {
  value: 0
};

export const CountReducer = (
  state = initilaState,
  action: CountActionTypes
): Count => {
  switch (action.type) {
    case ActionTypes.incremant:
      return { ...state, value: state.value + 1 };
    case ActionTypes.decremant:
      return { ...state, value: state.value - 1 };
  }
  return state;
};
