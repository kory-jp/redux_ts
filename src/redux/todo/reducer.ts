import { reducerWithInitialState } from "typescript-fsa-reducers";
import { TodoActions } from "./action";
import { Todo } from "./types";

export const initialTodo: Todo = {
  text: ""
};

export const TodoReducer = reducerWithInitialState(initialTodo).case(
  TodoActions.updateTextInputValue,
  (state, inputValue) => {
    return { ...state, ...inputValue };
  }
);
