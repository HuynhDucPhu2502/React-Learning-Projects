import { useState } from "react";
import { Link } from "react-router-dom";
import BookTable from "./BookTable";

const Header = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <>
      <div className="min-h-[100px] flex justify-center items-center space-x-12 text-white font-bold bg-blue-500">
        <Link
          to="/"
          className="px-4 py-1 bg-blue-700 hover:bg-blue-800 min-w-[150px] text-center rounded-lg"
        >
          Trang chủ
        </Link>
        <Link
          to="/menu"
          className="px-4 py-1 bg-blue-700 hover:bg-blue-800 min-w-[150px] text-center rounded-lg"
        >
          Thực đơn
        </Link>
        <Link
          to="/contact"
          className="px-4 py-1 bg-blue-700 hover:bg-blue-800 min-w-[150px] text-center rounded-lg"
        >
          Liên hệ
        </Link>

        <button
          onClick={() => setIsShowModal(true)}
          className="px-4 py-1 bg-orange-500 hover:bg-orange-600 min-w-[150px] text-center rounded-lg"
        >
          Đặt bàn
        </button>
      </div>
      {isShowModal && <BookTable onClose={() => setIsShowModal(false)} />}
    </>
  );
};

export default Header;
