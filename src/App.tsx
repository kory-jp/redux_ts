import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { decrementOpr, incrementOpr } from "./redux/counter/operations";
import { useState } from "react";
import { inputTextOpr } from "./redux/todo/operations";

function App() {
  const countState = useSelector((state: RootState) => state.count.value);
  const todoState = useSelector((state: RootState) => state.todo.text);
  const dispach = useDispatch();
  const [text, setText] = useState("");

  const OnIncrement = () => {
    dispach(incrementOpr());
  };

  const OnDecrement = () => {
    dispach(decrementOpr());
  };

  const inputText = (event: object) => {
    setText(event.target.value);
  };

  const onClickInputText = () => {
    dispach(inputTextOpr(text));
  };

  return (
    <>
      <div>
        {countState}
        <button onClick={OnIncrement}>+1</button>
        <button onClick={OnDecrement}>-1</button>
      </div>
      <div>
        <input type="text" value={text} onChange={inputText} />
        <button onClick={onClickInputText}>登録</button>
        <br />
        {todoState}
      </div>
    </>
  );
}

export default App;
