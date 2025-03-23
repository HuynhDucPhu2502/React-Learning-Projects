import { useState } from "react";
import { data } from "../data/BooksData";
import BookItem from "../components/BookItem";

const HomePage = () => {
  const [books] = useState(data);

  return (
    <div className="grid grid-cols-3 my-4 w-11/12 gap-4 mx-auto">
      {books.map((x) => (
        <BookItem key={x.tieude} {...x} />
      ))}
    </div>
  );
};

export default HomePage;
