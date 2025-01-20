import { useState } from "react";

const useInput = (
  defaultValue: string,
  handleValidation: (value: string) => boolean
) => {
  const [enteredValue, setEnteredValue] = useState<string>(defaultValue);
  const [didEdit, setDidEdit] = useState<boolean>(false);

  const valueIsValid = handleValidation(enteredValue);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  };

  const handleOnBlur = () => {
    setDidEdit(true);
  };

  return {
    enteredValue,
    handleOnChange,
    handleOnBlur,
    hasError: !valueIsValid && didEdit,
  };
};

export default useInput;
