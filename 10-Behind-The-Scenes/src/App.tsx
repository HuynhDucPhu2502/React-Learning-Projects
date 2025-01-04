import Header from "./components/Header";
import Counter from "./components/Counter/Counter";
import { log } from "./log";

import { useState } from "react";

function App() {
  log("<App /> rendered");

  const [enteredNumber, setEnteredNumber] = useState<number>(0);
  const [chosenCount, setChosenCount] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredNumber(+event.target.value);
  };

  const handleSetClick = () => {
    setChosenCount(enteredNumber);
    setEnteredNumber(0);
  };

  return (
    <>
      <Header />
      <main>
        <section id="configure-counter">
          <h2>Set Counter</h2>
          <input type="number" onChange={handleChange} value={enteredNumber} />
          <button onClick={handleSetClick}>Set</button>
        </section>
        <Counter initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
