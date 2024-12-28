import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

type Props = {
  title: string;
  targetTime: number;
};

const TimerChallenge: React.FC<Props> = ({ title, targetTime }) => {
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const [timerActive, setTimerActive] = useState(false);
  // const [timerExpired, setTimerExpired] = useState(false);

  const handleStart = () => {
    timer.current = setTimeout(() => {
      // setTimerExpired(true);
      setTimerActive(false);
      dialog.current?.showModal();
    }, targetTime * 1000);
    setTimerActive(true);
  };

  const handleStop = () => {
    if (!timer.current) return;
    clearTimeout(timer.current);
    setTimerActive(false);
    // setTimerExpired(false);
  };

  return (
    <>
      <ResultModal
        result="lost"
        targetTime={targetTime}
        stopTime={targetTime}
        ref={dialog}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} {targetTime > 0 ? "seconds" : "second"}
        </p>
        <p>
          <button onClick={timerActive ? handleStop : handleStart}>
            {timerActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p>{timerActive ? "Timer active" : "Timer inactive"}</p>
      </section>
    </>
  );
};

export default TimerChallenge;
