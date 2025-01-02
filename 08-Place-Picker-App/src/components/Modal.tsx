import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

type Props = {
  children: React.ReactNode;
};

type ModalRef = {
  open: () => void;
  close: () => void;
};

const Modal = forwardRef<ModalRef, Props>(({ children }, ref) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open: () => dialogRef.current?.showModal(),
    close: () => dialogRef.current?.close(),
  }));

  const container = document.getElementById("modal");
  if (!container) return null;

  return createPortal(
    <dialog className="modal" ref={dialogRef}>
      {children}
    </dialog>,
    container
  );
});

export default Modal;
