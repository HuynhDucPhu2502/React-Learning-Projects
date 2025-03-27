import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="flex justify-center items-center min-h-[80px] bg-blue-500 space-x-8">
      <Link
        to="/"
        className="block py-1 min-w-[150px] text-lg font-bold rounded-lg text-white bg-blue-300 hover:bg-blue-600 text-center"
      >
        Trang chủ
      </Link>
      <Link
        to="/cart"
        className="block py-1 min-w-[150px] text-lg font-bold rounded-lg text-white bg-blue-300 hover:bg-blue-600 text-center"
      >
        Giỏ hàng
      </Link>
    </div>
  );
};
