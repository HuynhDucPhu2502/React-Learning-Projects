import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8 space-y-4">
      <img src={logo} alt="" className="w-1/3" />
      <h1 className="text-5xl font-bold text-gray-900">
        Chào mừng bạn đến với Trang chủ!
      </h1>
      <p className="text-lg text-gray-700 mt-4">
        Khám phá nội dung thú vị tại đây.
      </p>

      <div className="mt-6 space-x-4">
        <Link
          to="/counter"
          className="px-6 py-2 bg-blue-500 text-white text-lg rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Bộ đếm thông minh
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
