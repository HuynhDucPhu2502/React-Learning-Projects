import { log } from "../../log";
import IconButton from "../UI/IconButton";
import { useCallback, useMemo, useState, memo } from "react";
import CounterOutput from "./CounterOutput";

import MinusIcon from "../UI/Icons/MinusIcon";
import PlusIcon from "../UI/Icons/PlusIcon";
import CounterHistory from "./CounterHistory";

const isPrime = (number: number) => {
  log("Calculating if is prime number", 2, "other");
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

type Props = {
  initialCount: number;
};

type CounterHistoryType = {
  value: number;
  id: number;
};

const Counter: React.FC<Props> = memo(({ initialCount }) => {
  log("<Counter /> rendered", 1);

  const initialCountIsPrime = useMemo(
    () => isPrime(initialCount),
    [initialCount]
  );

  const [counterChanges, setCounterChanges] = useState<CounterHistoryType[]>([
    { value: initialCount, id: Math.random() * 1000 },
  ]);

  const currentCounter = counterChanges.reduce(
    (prevCounter, counterChange) => prevCounter + counterChange.value,
    0
  );

  const handleDecrement = useCallback(() => {
    setCounterChanges((counterChanges) => [
      { value: -1, id: Math.random() * 1000 },
      ...counterChanges,
    ]);
  }, []);

  const handleIncrement = useCallback(() => {
    setCounterChanges((counterChanges) => [
      { value: 1, id: Math.random() * 1000 },
      ...counterChanges,
    ]);
  }, []);

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{" "}
        <strong>is {initialCountIsPrime ? "a" : "not a"}</strong> prime number.
      </p>
      <p>
        <IconButton Icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <CounterOutput value={currentCounter} />
        <IconButton Icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
      <CounterHistory history={counterChanges} />
    </section>
  );
});

export default Counter;
