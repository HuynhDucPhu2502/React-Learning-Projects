import React, { useEffect, useMemo, useRef } from "react";

export const CalculatorResult = ({ number1, number2, operation }) => {
  const resultRef = useRef(null);

  const result = useMemo(() => {
    console.log("Calculating...");
    switch (operation) {
      case "+":
        return number1 + number2;
      case "-":
        return number1 - number2;
      case "*":
        return number1 * number2;
      case "/":
        return number2 === 0 ? "Không thể chia cho 0" : number1 / number2;
      default:
        return "Invalid operation";
    }
  }, [number1, number2, operation]);

  useEffect(() => {
    if (resultRef.current) {
      resultRef.current.textContent = result;
    }
  }, [result]);

  return (
    <>
      <h2 className="text-xl font-semibold text-center mt-4">
        Kết quả: <span className="text-green-500" ref={resultRef}></span>
      </h2>
    </>
  );
};
