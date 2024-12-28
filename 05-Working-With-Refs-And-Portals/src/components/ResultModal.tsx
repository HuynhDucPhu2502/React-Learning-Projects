import { forwardRef } from "react";

type Props = {
  result: string;
  targetTime: number;
  stopTime: number;
};

const ResultModal = forwardRef<HTMLDialogElement, Props>(
  ({ result, targetTime, stopTime }, ref) => {
    const left = targetTime - stopTime;

    return (
      <dialog ref={ref} className="result-modal">
        <h2>You {result}</h2>
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
