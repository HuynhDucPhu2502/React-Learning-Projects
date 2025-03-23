import { useEffect, useReducer, useRef } from "react";

import { counterReducer } from "../reducers/counterReducer";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const CounterPage = () => {
  const [count, dispatch] = useReducer(counterReducer, 0);
  const ref = useRef<HTMLDivElement>(null);

  // Dùng Ref
  useEffect(() => {
    if (ref.current) ref.current.innerText = `${count}`;
  }, [count]);

  // Dùng useMemo
  // const displayValue = useMemo(() => count, [count]);

  return (
    <>
      <div className="w-2/3 min-h-[500px] mx-auto my-12 space-y-8 flex flex-col justify-center items-center bg-gray-200 rounded-lg">
        <h1 className="text-6xl  font-bold text-center ">Bộ Đếm Thông Minh</h1>
        <h2
          className="text-5xl font-bold bg-white rounded-lg px-4 py-2 min-w-[200px] text-center"
          ref={ref}
        >
          {/* {displayValue} */}
        </h2>
        <div className="flex flex-col space-y-2">
          <div className="space-x-4">
            <Button
              style="bg-green-500 hover:bg-green-600"
              onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}
            >
              Tăng 1
            </Button>
            <Button
              style="bg-green-500 hover:bg-green-600"
              onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}
            >
              Tăng 10
            </Button>
          </div>
          <div className="space-x-4">
            <Button
              style="bg-red-500 hover:bg-red-600"
              onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}
            >
              Giảm 1
            </Button>
            <Button
              style="bg-red-500 hover:bg-red-600"
              onClick={() => dispatch({ type: "DECREMENT", payload: 10 })}
            >
              Giảm 10
            </Button>
          </div>
          <div className="flex justify-center items-center">
            <Button
              style="bg-gray-400 hover:bg-gray-500"
              onClick={() => dispatch({ type: "RESET" })}
            >
              Đặt lại
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-6 space-x-4 w-fit mx-auto">
        <Link
          to="/"
          className="px-6 py-2 bg-blue-500 text-white text-lg rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Trang chủ
        </Link>
      </div>
    </>
  );
};

export default CounterPage;
