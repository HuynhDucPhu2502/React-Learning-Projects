import React from "react";
import { Link } from "react-router-dom";

export const BookItem = ({ item }) => {
  return (
    <div className="border-2 border-gray-300 rounded-lg p-2 flex flex-col items-center space-y-4">
      <img src={item.img} alt="" className="w-full h-1/2" />
      <h3 className="font-bold text-xl">{item.tieude}</h3>
      <h4 className="text-gray-500 text-lg">{item.tacgia}</h4>
      <p className="italic min-h-[80px]">{item.mota}</p>
      <p className="text-red-500 font-bold text-xl">{item.gia} VNĐ</p>
      <div className="text-center w-full">
        <button className="bg-blue-500 hover:bg-blue-600 rounded-lg w-2/3 p-1 font-bold text-white">
          <Link to={`/book/${item.id}`}>Xem chi tiết</Link>
        </button>
      </div>
    </div>
  );
};
