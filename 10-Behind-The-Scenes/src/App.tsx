import Header from "./components/Header";
import Counter from "./components/Counter/Counter";
import { log } from "./log";
import CounterConfigure from "./components/CounterConfigure";

import { useState } from "react";

function App() {
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState<number>(0);

  return (
    <>
      <Header />
      <main>
        <CounterConfigure handleOnClick={setChosenCount} />
        <Counter key={chosenCount} initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
