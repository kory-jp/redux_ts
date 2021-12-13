import { Action } from "redux";
import { ActionTypes } from "../actionTypes";

export type Count = {
  value: number;
};

interface incrementAction extends Action {
  type: typeof ActionTypes.incremant;
}

interface decrementAction extends Action {
  type: typeof ActionTypes.decremant;
}

export type CountActionTypes = incrementAction | decrementAction;
