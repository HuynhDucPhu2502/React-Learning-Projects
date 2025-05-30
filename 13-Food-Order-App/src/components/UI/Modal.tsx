import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type Props = {
  open: boolean;
  className?: string;
  children: React.ReactNode;
  onClose?: () => void;
};

const Modal: React.FC<Props> = ({
  open,
  className = "",
  children,
  onClose,
}) => {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialogElement = dialog.current;
    if (!dialogElement) return;

    if (open) {
      dialog.current?.showModal();
    }

    return () => dialogElement.close();
  }, [open]);

  const container = document.getElementById("modal");
  if (container === null) return null;

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    container
  );
};

export default Modal;
