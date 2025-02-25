import { useState, memo } from "react";
import { log } from "../log";

type Props = {
  handleOnClick: (chosenCount: number) => void;
};

const CounterConfigure: React.FC<Props> = ({ handleOnClick }) => {
  log("<CounterConfigure /> rendered", 1);
  const [enteredNumber, setEnteredNumber] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredNumber(Number(event.target.value));
  };

  const handleSetClick = () => {
    handleOnClick(enteredNumber);
    setEnteredNumber(0);
  };

  return (
    <section id="configure-counter">
      <h2>Set Counter</h2>
      <input type="number" onChange={handleChange} value={enteredNumber} />
      <button onClick={handleSetClick}>Set</button>
    </section>
  );
};

export default memo(CounterConfigure);
