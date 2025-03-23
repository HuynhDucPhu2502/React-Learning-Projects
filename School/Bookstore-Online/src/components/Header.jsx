import { Link } from "react-router-dom";

const Header = () => {
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
          to="/cart"
          className="px-4 py-1 bg-blue-700 hover:bg-blue-800 min-w-[150px] text-center rounded-lg"
        >
          Giỏ hàng
        </Link>
      </div>
    </>
  );
};

export default Header;
