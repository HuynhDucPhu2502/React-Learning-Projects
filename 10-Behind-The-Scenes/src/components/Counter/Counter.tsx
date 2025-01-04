import { log } from "../../log";
import IconButton from "../UI/IconButton";
import { useState } from "react";
import CounterOutput from "./CounterOutput";

import MinusIcon from "../UI/Icons/MinusIcon";
import PlusIcon from "../UI/Icons/PlusIcon";

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

const Counter: React.FC<Props> = ({ initialCount }) => {
  log("<Counter /> rendered", 1);

  const initialCountIsPrime = isPrime(initialCount);
  const [counter, setCounter] = useState<number>(initialCount);

  const handleDecrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

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
        <CounterOutput value={counter} />
        <IconButton Icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
    </section>
  );
};

export default Counter;
