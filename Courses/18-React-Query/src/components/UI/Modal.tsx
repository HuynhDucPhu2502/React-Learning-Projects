import { FC, ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type Props = {
  children: ReactNode;
  onClose: () => void;
};

const Modal: FC<Props> = ({ children, onClose }) => {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modal = dialog.current;

    if (!modal) return;

    modal.showModal();
  }, []);

  const container = document.getElementById("modal");
  if (!container) return null;

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {children}
    </dialog>,
    container,
  );
};

export default Modal;
