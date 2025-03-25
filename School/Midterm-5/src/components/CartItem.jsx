import React, { useContext } from "react";
import CartContext from "../context/CartContext";

export const CartItem = ({ cartItem }) => {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="border-2 border-gray-500 rounded-lg p-2 flex flex-row items-center my-12 w-[600px] mx-auto space-x-4">
      <img src={cartItem.img} alt="" className="size-24" />
      <div className="grow">
        <h3 className="text-lg font-bold">
          {cartItem.tieude}{" "}
          <span className="text-md font-normal">x {cartItem.quantity}</span>
        </h3>
        <p className="text-red-500 font-bold text-lg">
          {cartItem.gia} VNĐ/Sách
        </p>
      </div>
      <div className="flex flex-row space-x-4">
        <button
          onClick={() => dispatch({ type: "ADD", payload: cartItem })}
          className="bg-blue-500 hover:bg-blue-600 rounded-lg p-2  text-white"
        >
          Thêm
        </button>
        <button
          onClick={() =>
            dispatch({ type: "REMOVE", payload: { id: cartItem.id } })
          }
          className="bg-red-500 hover:bg-red-600 rounded-lg p-2  text-white"
        >
          Giảm
        </button>
      </div>
    </div>
  );
};
