import { createStore } from "redux";

type CounterState = {
  count: number;
};

type CounterAction = { type: "INCREMENT" } | { type: "DECREMENT" };

const counterReducer = (
  state: CounterState = { count: 0 },
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

const counterSubscriber = () => {
  const counter = store.getState();
  console.log(counter);
};

store.subscribe(counterSubscriber);
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
