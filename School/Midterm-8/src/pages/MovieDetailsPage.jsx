import React from "react";
import { useParams } from "react-router-dom";
import { movies } from "../data/data";

export const MovieDetailsPage = () => {
  const { id } = useParams();
  const movie = movies.find((x) => x.id === parseInt(id));
  if (!movie) return;

  return (
    <div className="flex items-center space-y-4 flex-col w-2/3 mx-auto my-12">
      <img src={movie.poster} className="block w-[150px]" />
      <h3 className="text-xl font-bold">{movie.title}</h3>
      <h4 className="text-lg text-gray-400">{movie.director}</h4>
      <h4 className="text-lg italic">{movie.description}</h4>
      <h4 className="text-lg">{movie.duration} PHÚT</h4>
      <p className="font-bold text-xl text-red-500">{movie.ticketPrice} VNĐ</p>
      <div className="text-center w-2/3"></div>
      <div className="text-center w-2/3">
        <button className="bg-green-500 hover:bg-green-600 w-1/3 py-2 text-white rounded-lg">
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
};
