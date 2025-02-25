import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

type Props = {
  title: string;
  targetTime: number;
};

type ModalHandle = {
  open: () => void;
};

const TimerChallenge: React.FC<Props> = ({ title, targetTime }) => {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dialog = useRef<ModalHandle>(null);
  const [timerActive, setTimerActive] = useState(false);
  const [stoppedTime, setStoppedTime] = useState<number>(0);

  const handleStart = () => {
    setStoppedTime(Date.now());
    setTimerActive(true);

    timer.current = setTimeout(() => {
      handleStop(false);
    }, targetTime * 1003);
  };

  const handleStop = (isClicked: boolean) => {
    if (!timer.current) return;

    clearTimeout(timer.current);
    setTimerActive(false);
    if (isClicked)
      setStoppedTime((prevState) => (Date.now() - prevState) / 1000);
    else setStoppedTime(0);

    dialog.current?.open();
  };

  return (
    <>
      <ResultModal
        targetTime={targetTime}
        stoppedTime={stoppedTime}
        ref={dialog}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} {targetTime > 0 ? "seconds" : "second"}
        </p>
        <p>
          <button onClick={timerActive ? () => handleStop(true) : handleStart}>
            {timerActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p>{timerActive ? "Timer active" : "Timer inactive"}</p>
      </section>
    </>
  );
};

export default TimerChallenge;
