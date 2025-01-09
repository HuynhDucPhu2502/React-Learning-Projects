import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

type Props = {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
};

const Modal: React.FC<Props> = ({ open, children, onClose }) => {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      dialog.current?.showModal();
    } else {
      dialog.current?.close();
    }
  }, [open]);

  const container = document.getElementById("modal");
  if (!container) return <p>Error</p>;

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {open ? children : null}
    </dialog>,
    container
  );
};

export default Modal;
