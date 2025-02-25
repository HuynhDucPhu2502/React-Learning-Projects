import { forwardRef, useImperativeHandle, useRef } from "react";

type Props = {
  targetTime: number;
  stoppedTime: number;
};

type ModalHandle = {
  open: () => void;
};

const ResultModal = forwardRef<ModalHandle, Props>(
  ({ targetTime, stoppedTime }, ref) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => ({
      open: () => {
        dialogRef.current?.showModal();
      },
    }));

    const result = stoppedTime == targetTime ? "won" : "lost";

    const left: number = (targetTime - stoppedTime).toFixed(2);
    const score = ((1 - left / targetTime) * 100).toFixed(2);

    return (
      <dialog ref={dialogRef} className="result-modal">
        <h2>You {result}</h2>
        <p>
          Your score: <strong>{score}</strong>
        </p>
        <p>
          The target time was <strong>{targetTime}</strong> seconds.
        </p>
        <p>
          You stopped the timer with <strong>{left}</strong> seconds left.
        </p>
        <form method="dialog">
          <button>Close</button>
        </form>
      </dialog>
    );
  }
);
export default ResultModal;
