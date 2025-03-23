import { useContext } from "react";
import FoodOrderingContext from "../context/FoodOrderingContext";

const BookTable = ({ onClose }) => {
  const { foodOrdered, removeFood } = useContext(FoodOrderingContext);

  return (
    <div className="fixed inset-0 z-50 bg-gray-600/50 flex justify-center items-center">
      <div className="w-4/9 bg-white min-h-[300px] rounded-lg py-4 px-4">
        <div className="flex items-center justify-between mb-12 border-b-2 border-gray-300 pb-4">
          <h1 className="text-center font-bold text-2xl">
            Danh sách món ăn đã đặt
          </h1>
          <button
            onClick={onClose}
            className="text-lg font-bold text-white bg-red-500 min-w-[50px] min-h-[50px] rounded-full hover:bg-red-600"
          >
            X
          </button>
        </div>

        <div className="space-y-4">
          {foodOrdered.map((item) => {
            return (
              <div
                className="flex items-center  justify-between"
                id="foodOrdered"
                key={`foodOrdered-${item.id}`}
              >
                <img
                  src={item.imgUrl}
                  alt=""
                  className="w-32 rounded-lg border-2 border-gray-200 shadow-lg"
                />
                <p className="text-lg font-semibold">
                  {item.name}
                  <span className="font-normal"> x{item.quantity}</span>
                </p>
                <button
                  onClick={() => removeFood(item)}
                  className="bg-red-500 hover:bg-red-600 px-2 py-1 rounded-lg text-white cur"
                >
                  Hủy đặt món
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BookTable;
