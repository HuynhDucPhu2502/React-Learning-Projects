import { Link } from "react-router-dom";

const BookItem = ({ id, tieude, tacgia, mota, gia, img }) => {
  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
      <img src={img} alt="" />

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900">{tieude}</h3>
        <p className="text-sm text-gray-600">{tacgia}</p>
        <p className="text-sm text-gray-500 mt-1">{mota}</p>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-lg text-blue-600 font-bold">
            {gia.toLocaleString("vi-VN")} VNĐ
          </span>
          <Link
            to={`book/${id}`}
            className="text-white bg-blue-500 hover:bg-blue-600 rounded-lg px-4 py-2"
          >
            Xem chi tiết
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
