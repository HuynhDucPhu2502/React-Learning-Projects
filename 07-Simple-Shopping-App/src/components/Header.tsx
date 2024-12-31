import { useRef } from "react";
import CartModal from "./CartModal";

type Item = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type Modal = {
  open: () => void;
};

type Props = {
  cart: Item[];
  handleUpdateCartItemQuantity: (productId: string, quantity: number) => void;
};

const Header: React.FC<Props> = ({ cart, handleUpdateCartItemQuantity }) => {
  const cartQuantity = cart.length;
  const modal = useRef<Modal | null>(null);

  const handleOpenModal = () => {
    modal.current?.open();
  };

  return (
    <>
      <CartModal
        ref={modal}
        cart={cart}
        handleUpdateCartItemQuantity={handleUpdateCartItemQuantity}
        title="Your Cart"
      ></CartModal>
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleOpenModal}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
};

export default Header;
