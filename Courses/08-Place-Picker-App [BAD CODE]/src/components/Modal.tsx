import { forwardRef, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import PlaceContext from "../store/picked-places-context";
import { useContext } from "react";

type ModalAction = {
  open: () => void;
  close: () => void;
};

type Props = {
  placeId: string;
};

const Modal = forwardRef<ModalAction, Props>(({ placeId }, ref) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { handleRemovePlace } = useContext(PlaceContext);

  useImperativeHandle(ref, () => ({
    open: () => {
      if (dialogRef.current) dialogRef.current.showModal();
    },
    close: () => {
      if (dialogRef.current) dialogRef.current.close();
    },
  }));

  const onCancel = () => {
    if (dialogRef.current) dialogRef.current.close();
  };

  const onConfirm = () => {
    if (dialogRef.current) dialogRef.current.close();
    handleRemovePlace(placeId);
  };

  const container: HTMLElement | null = document.getElementById("modal");
  if (container === null) return null;

  return createPortal(
    <dialog className="modal" ref={dialogRef}>
      <div id="delete-confirmation">
        <h2>Are you sure?</h2>
        <p>Do you really want to remove this place?</p>
        <div id="confirmation-actions">
          <button onClick={onCancel} className="button-text">
            No
          </button>
          <button onClick={onConfirm} className="button">
            Yes
          </button>
        </div>
      </div>
    </dialog>,
    container
  );
});

export default Modal;
