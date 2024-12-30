import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";
import Button from "./Button";

type ModalHandle = {
  open: () => void;
};

type Props = { children: React.ReactNode };

const Modal = forwardRef<ModalHandle, Props>(({ children }, ref) => {
  const modalRoot = document.getElementById("modal-root");
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current?.showModal();
      },
    };
  });

  if (!modalRoot) {
    console.error("Modal root không tìm thấy");
    return null;
  }

  return createPortal(
    <dialog
      ref={dialog}
      className="w-1/4 px-12 pt-8 rounded-lg space-y-4 backdrop:bg-stone-900/90"
    >
      {children}
      <div className="flex flex-row justify-end">
        <Button title="Close" onClick={() => dialog.current?.close()} />
      </div>
    </dialog>,
    modalRoot
  );
});

export default Modal;
