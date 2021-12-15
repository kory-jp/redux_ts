import { increment } from "./action";
import { Count } from "./types";

export const incrementOpr = () => {
  return async (dispach, getState) => {
    const count = getState();
    const value = count.count.value + 1;
    const updateState: Count = {
      value: value
    };
    dispach(increment(updateState));
  };
};
