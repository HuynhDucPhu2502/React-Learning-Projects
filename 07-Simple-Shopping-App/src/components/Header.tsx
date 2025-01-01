import { useRef } from "react";
import CartModal from "./CartModal";
import { useContext } from "react";
import ShoppingCartContext from "../store/shopping-cart-context";

type Item = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type ShoppingCartContextType = {
  shoppingCart: Item[];
  handleAddItemToCart: (productId: string) => void;
  handleUpdateCartItemQuantity: (productId: string, quantity: number) => void;
};

type Modal = {
  open: () => void;
};

const Header = () => {
  const { shoppingCart } =
    useContext<ShoppingCartContextType>(ShoppingCartContext);

  const modal = useRef<Modal | null>(null);

  const handleOpenModal = () => {
    modal.current?.open();
  };

  return (
    <>
      <CartModal ref={modal} title="Your Cart"></CartModal>
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleOpenModal}>
            Cart ({shoppingCart.length})
          </button>
        </p>
      </header>
    </>
  );
};

export default Header;
