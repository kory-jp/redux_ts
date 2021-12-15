import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { decrement } from "./redux/counter/action";
import { incrementOpr } from "./redux/counter/operations";

function App() {
  const countState = useSelector((state: RootState) => state.count.value);
  const dispach = useDispatch();

  const OnIncrement = () => {
    dispach(incrementOpr());
  };

  const OnDecrement = () => {
    dispach(decrement());
  };
  return (
    <div>
      {countState}
      <button onClick={OnIncrement}>+1</button>
      <button onClick={OnDecrement}>-1</button>
    </div>
  );
}

export default App;
