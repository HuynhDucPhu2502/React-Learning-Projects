import Header from "./components/Header.tsx";
import UserInput from "./components/UserInput.tsx";
import Result from "./components/Result.tsx";
import { useState } from "react";

type userInput = {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
};

function App() {
  const [userInput, setUserInput] = useState<userInput>({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isInputValid = userInput.duration >= 1;

  const handleOnChange = (inputIdentifier: string, value: number) => {
    setUserInput((prevState) => ({
      ...prevState,
      [inputIdentifier]: value,
    }));
  };

  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleOnChange={handleOnChange} />
      {!isInputValid && (
        <p className="center">Please enter duration greater than 0</p>
      )}
      {isInputValid && <Result {...userInput} />}
    </>
  );
}

export default App;
