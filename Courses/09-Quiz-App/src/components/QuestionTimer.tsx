import { useState, useEffect } from "react";

type Props = {
  timeout: number;
  onTimeOut: (() => void) | null;
  mode: string;
};

const QuestionTimer: React.FC<Props> = ({ timeout, onTimeOut, mode }) => {
  const [remainningTime, setRemainningTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (onTimeOut) onTimeOut();
    }, timeout);

    return () => clearTimeout(timer);
  }, [timeout, onTimeOut]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainningTime((prev) => prev - 10);
    }, 10);

    return () => clearInterval(interval);
  }, [timeout]);

  return (
    <progress
      id="question-timer"
      max={timeout}
      value={remainningTime}
      className={mode}
    ></progress>
  );
};

export default QuestionTimer;
