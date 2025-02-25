import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Cart from "./Cart";
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

type Props = {
  title: string;
};

const CartModal = forwardRef<Modal, Props>(({ title }, ref) => {
  const { shoppingCart } =
    useContext<ShoppingCartContextType>(ShoppingCartContext);

  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open: () => {
      dialogRef.current?.showModal();
    },
  }));

  const container: HTMLElement | null = document.getElementById("modal");
  if (container === null) return null;

  return createPortal(
    <dialog ref={dialogRef} id="modal">
      <h2>{title}</h2>
      <Cart></Cart>
      <form method="dialog" id="modal-actions">
        <button>Close</button>
        {shoppingCart.length > 0 && <button>Checkout</button>}
      </form>
    </dialog>,
    container
  );
});

export default CartModal;
