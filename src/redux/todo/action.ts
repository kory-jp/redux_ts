import { actionCreatorFactory } from "typescript-fsa";
import { Todo } from "./types";

const actionCreator = actionCreatorFactory();

export const TodoActions = {
  updateTextInputValue: actionCreator<Todo>("ACTIONS_UPDATE_TEXT_INPUT_VALUE")
};
