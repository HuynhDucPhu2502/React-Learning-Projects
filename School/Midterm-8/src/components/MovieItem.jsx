import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";

export const MovieItem = ({ movie }) => {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="border-2 border-gray-500 rounded-lg p-4 flex items-center space-y-4 flex-col">
      <img src={movie.poster} className="block w-[150px]" />
      <h3 className="text-xl font-bold">{movie.title}</h3>
      <h4 className="text-lg text-gray-400">{movie.director}</h4>
      <p className="font-bold text-xl text-red-500">{movie.ticketPrice} VNĐ</p>
      <div className="text-center w-2/3">
        <Link
          to={`/movie/${movie.id}`}
          className="block bg-blue-500 hover:bg-blue-600 w-full py-2 text-white rounded-lg"
        >
          Xem chi tiết
        </Link>
      </div>
      <div className="text-center w-2/3">
        <button
          onClick={() => dispatch({ type: "ADD", payload: movie })}
          className="bg-green-500 hover:bg-green-600 w-full py-2 text-white rounded-lg"
        >
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
};

// {
//   poster: "/phim1.png",
//   title: "Đêm Dài Kinh Hoàng",
//   director: "Trần Minh Khoa",
//   ticketPrice: 90000,
//   description:
//     "Một người phụ nữ bị mắc kẹt trong khu phố tối tăm nơi xảy ra hàng loạt vụ mất tích bí ẩn vào ban đêm.",
//   duration: 112, // phút
// },
