import { useContext } from "react";
import CartContext from "../context/CartContext";
import CartItem from "../components/CartItem";

const CartPage = () => {
  const { cartItem } = useContext(CartContext);

  const totalPrice = cartItem.reduce(
    (total, item) => total + item.gia * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (cartItem.length === 0) alert("Giỏ hàng của bạn  đang trống.");
    else alert("Thanh toán thành công");
  };

  if (cartItem.length === 0) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-5xl">Giỏ hàng của bạn hiện đang trống.</p>
      </div>
    );
  }

  return (
    <div className="w-2/3 mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Giỏ Hàng</h2>
      {cartItem.map((item) => (
        <CartItem key={item.id} cart={item} />
      ))}
      <div className="mt-4">
        <p className="text-lg font-semibold">
          Tổng cộng: {totalPrice.toLocaleString("vi-VN")} VNĐ
        </p>
        <p className="text-lg font-semibold">
          Số lượng mặt hàng: {cartItem.length}
        </p>
      </div>
      <div className="text-center">
        <button
          onClick={handleCheckout}
          className="w-2/3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded my-12"
        >
          Thanh Toán
        </button>
      </div>
    </div>
  );
};

export default CartPage;
