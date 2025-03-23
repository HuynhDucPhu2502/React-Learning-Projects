import { useParams } from "react-router-dom";
import { data } from "../data/BooksData";
import { useContext } from "react";
import CartContext from "../context/CartContext";

const BookPage = () => {
  const { id } = useParams();

  const { tieude, tacgia, mota, gia, img } = data.find(
    (x) => x.id === parseInt(id)
  );

  const { addItem } = useContext(CartContext);

  return (
    <div className="container mx-auto mt-10">
      {tieude ? (
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
          <img
            src={img}
            alt={tieude}
            className="w-1/3 object-cover rounded-md"
          />
          <div className="text-center mt-4">
            <h2 className="text-2xl font-bold text-gray-900">{tieude}</h2>
            <p className="text-md text-gray-600">{tacgia}</p>
            <p className="text-gray-500">{mota}</p>
            <p className="text-lg text-blue-600 font-bold mt-2">
              {gia.toLocaleString("vi-VN")} VNĐ
            </p>
            <button
              onClick={() => addItem({ id, tieude, tacgia, mota, gia, img })}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      ) : (
        <p>Không tìm thấy sách.</p>
      )}
    </div>
  );
};

export default BookPage;
