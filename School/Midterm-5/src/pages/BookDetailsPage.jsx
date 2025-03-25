import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { data } from "../data/BooksData";
import CartContext from "../context/CartContext";

export const BookDetailsPage = () => {
  const { state, dispatch } = useContext(CartContext);
  const { id } = useParams();
  const item = data.find((x) => x.id === parseInt(id));
  if (!item) return;
  console.log(state.cart);

  return (
    <div className="p-2 flex flex-col items-center space-y-4">
      <img src={item.img} alt="" className="w-1/3" />
      <h3 className="font-bold text-xl">{item.tieude}</h3>
      <h4 className="text-gray-500 text-lg">{item.tacgia}</h4>
      <p className="italic">{item.mota}</p>
      <p className="text-red-500 font-bold text-xl">{item.gia} VNĐ</p>
      <button
        onClick={() => dispatch({ type: "ADD", payload: item })}
        className="bg-blue-500 hover:bg-blue-600 rounded-lg w-1/3 p-1 font-bold text-white"
      >
        Thêm vào giỏ hàng
      </button>
    </div>
  );
};
