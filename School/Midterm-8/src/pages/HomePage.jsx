import React, { useState } from "react";
import { movies } from "../data/data";
import { MovieItem } from "../components/MovieItem";
import CartContext from "../context/CartContext";

export const HomePage = () => {
  const [data] = useState(movies);

  return (
    <div className="my-12 grid grid-cols-3 gap-4 w-11/12 mx-auto">
      {data.map((x) => (
        <MovieItem movie={x} key={x.id} />
      ))}
    </div>
  );
};
