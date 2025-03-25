import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="bg-blue-500 flex justify-center items-center space-x-4 min-h-[80px]">
      <Link
        to="/"
        className="bg-blue-300 rounded-lg p-2 text-white font-bold text-2xl"
      >
        Trang chủ
      </Link>
      <Link
        to="/cart"
        className="bg-blue-300 rounded-lg p-2 text-white font-bold text-2xl"
      >
        Giỏ hàng
      </Link>
    </div>
  );
};
