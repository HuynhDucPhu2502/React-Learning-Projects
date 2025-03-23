import React from "react";

export const CartList = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold pb-4 border-gray-300 border-b-2">
        Giỏ hàng của bạn
      </h1>
      <div className="my-12 min-h-[200px] flex justify-center items-center">
        <p className="text-5xl text-gray-500">GIỎ HÀNG TRỐNG...</p>
      </div>
    </div>
  );
};
