export type CounterAction =
  | { type: "INCREMENT"; payload: number }
  | { type: "DECREMENT"; payload: number }
  | { type: "RESET" };

export const counterReducer = (
  state: number,
  action: CounterAction
): number => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;
    case "RESET":
      return 0;
    default:
      return state;
  }
};
