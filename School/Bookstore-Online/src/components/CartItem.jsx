import { useContext } from "react";
import CartContext from "../context/CartContext";

const CartItem = ({ cart }) => {
  const { addItem, removeItem } = useContext(CartContext);

  return (
    <div className="flex items-center justify-between bg-white p-4 shadow-md rounded-lg">
      <div className="flex items-center">
        <img src={cart.img} className="w-16 h-16 mr-4" alt={cart.tieude} />
        <div>
          <h4 className="text-lg font-semibold">{cart.tacgia}</h4>
          <p className="text-sm text-gray-600">Giá: {cart.gia} VNĐ</p>
        </div>
      </div>
      <div>
        <p className="text-md font-bold">
          {cart.quantity} x {cart.price}
        </p>
        <div className="flex space-x-2 mt-2">
          <button
            onClick={() => addItem(cart)}
            className="text-white bg-green-500 hover:bg-green-600 px-3 py-1 rounded"
          >
            Thêm
          </button>
          <button
            onClick={() => removeItem(cart)}
            className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
          >
            Giảm
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
