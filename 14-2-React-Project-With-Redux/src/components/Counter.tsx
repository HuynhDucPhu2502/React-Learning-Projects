import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/index";
import { counterActions } from "../store/counterSlice";

const Counter = () => {
  const counter = useSelector((state: RootState) => state.counter.counter);
  const showCounter = useSelector(
    (state: RootState) => state.counter.showCounter
  );
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const handleIncrement = (amount?: number) => {
    dispatch(counterActions.increment(amount));
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={() => handleIncrement()}>Increment</button>
        <button onClick={() => handleIncrement(10)}>Increment By 10</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
