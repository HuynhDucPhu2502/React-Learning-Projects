import React from "react";
import { data } from "../data/BooksData";
import { BookItem } from "../components/BookItem";

export const HomePage = () => {
  return (
    <div className="grid grid-cols-4 w-11/12 mx-auto gap-4 my-12">
      {data.map((item) => (
        <BookItem item={item} key={item.id} />
      ))}
    </div>
  );
};
