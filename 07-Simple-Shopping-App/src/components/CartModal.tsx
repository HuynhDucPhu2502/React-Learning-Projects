import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Cart from "./Cart";

type Modal = {
  open: () => void;
};

type Item = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type Props = {
  cart: Item[];
  handleUpdateCartItemQuantity: (productId: string, quantity: number) => void;
  title: string;
};

const CartModal = forwardRef<Modal, Props>(
  ({ cart, handleUpdateCartItemQuantity, title }, ref) => {
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
        <Cart
          cart={cart}
          handleUpdateCartItemQuantity={handleUpdateCartItemQuantity}
        ></Cart>
        <form method="dialog" id="modal-actions">
          <button>Close</button>
          {cart.length > 0 && <button>Checkout</button>}
        </form>
      </dialog>,
      container
    );
  }
);

export default CartModal;
