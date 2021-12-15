import { Todo } from "./types";
import { TodoActions } from "./action";

export const inputTextOpr = (text: string) => {
  return async (dispach) => {
    const updateState: Todo = {
      text: text
    };
    dispach(TodoActions.updateTextInputValue(updateState));
  };
};
