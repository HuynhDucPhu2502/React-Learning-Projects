import React, { useRef, useState } from "react";
import { CalculatorResult } from "./CalculatorResult";

export const Calculator = () => {
  const firstNumberRef = useRef(null);
  const operationRef = useRef(null);
  const secondNumberRef = useRef(null);

  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [operation, setOperation] = useState(0);

  const onSubmit = () => {
    setNumber1(parseFloat(firstNumberRef.current.value));
    setNumber2(parseFloat(secondNumberRef.current.value));
    setOperation(operationRef.current.value);
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold text-center mb-4">Máy Tính Đơn Giản</h1>
      <div className="flex justify-center items-center space-x-4 mb-4">
        <input
          type="number"
          className="p-2 border-2 border-gray-300 rounded"
          placeholder="Nhập số thứ 1"
          ref={firstNumberRef}
        />
        <select
          className="p-2 border-2 border-gray-300 rounded"
          ref={operationRef}
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="number"
          className="p-2 border-2 border-gray-300 rounded"
          placeholder="Nhập số thứ 2"
          ref={secondNumberRef}
        />
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => onSubmit()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
        >
          Tính
        </button>
      </div>
      <CalculatorResult
        number1={number1}
        number2={number2}
        operation={operation}
      />
    </div>
  );
};
