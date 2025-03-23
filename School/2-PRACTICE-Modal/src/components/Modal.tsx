const Modal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="h-screen fixed inset-0 flex justify-center items-center bg-black/50 z-50">
      <div className="w-fit border-2 border-black p-4 rounded-lg bg-white">
        <div className="space-y-4">
          <div className="flex flex-row justify-between items-center">
            <h1 className="font-bold text-3xl text-blue-400">Đăng nhập</h1>
            <button
              onClick={onClose}
              className="bg-red-500 hover:bg-red-600 cursor-pointer font-bold text-lg text-white px-4 py-2 rounded-full"
            >
              X
            </button>
          </div>
          <p className="italic">
            Tham gia cộng đồng React hôm nay, trở thành bậc thầy Web Development
          </p>
        </div>
        <div className="flex flex-col mt-4 space-y-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

          <input
            type="text"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex flex-row justify-center items-center mt-8">
          <button className="bg-blue-400 py-2 px-4 text-white font-bold rounded-lg hover:bg-blue-600">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
