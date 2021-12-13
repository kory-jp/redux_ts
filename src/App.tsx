import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { decrement, increment } from "./store/counter/action";

function App() {
  const countState = useSelector((state: RootState) => state.count);
  const dispach = useDispatch();

  const OnIncrement = () => {
    dispach(increment());
  };

  const OnDecrement = () => {
    dispach(decrement());
  };
  return (
    <div>
      {countState.value}
      <button onClick={OnIncrement}>+1</button>
      <button onClick={OnDecrement}>-1</button>
    </div>
  );
}

export default App;
