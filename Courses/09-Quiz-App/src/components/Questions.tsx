import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import { Question as QuestionType } from "../types/Question";

import { useCallback, useState } from "react";

type Props = {
  handleSelectAnswer: (answer: string | null) => void;
  questionData: QuestionType;
  userAnswer: string | null;
};

type AnswerType = {
  selectedAnswer: string;
  isCorrect: boolean | null;
};

const Questsions: React.FC<Props> = ({ handleSelectAnswer, questionData }) => {
  const [answer, setAnswer] = useState<AnswerType>({
    selectedAnswer: "",
    isCorrect: null,
  });

  let TIME_OUT = 10000;
  if (answer.selectedAnswer) TIME_OUT = 1000;
  if (answer.isCorrect !== null) TIME_OUT = 2000;

  const onSelectAnswer = (answer: string) => {
    setAnswer({ selectedAnswer: answer, isCorrect: null });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: answer === questionData.answers[0],
      });

      setTimeout(() => handleSelectAnswer(answer), 2000);
    }, 1000);
  };

  const handleSkipQuestion = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  let answerState: string = "";
  if (answer.isCorrect === true && answer.selectedAnswer)
    answerState = "correct";
  else if (answer.isCorrect === false && answer.selectedAnswer)
    answerState = "wrong";
  else if (answer.selectedAnswer) answerState = "answered";

  return (
    <div id="question">
      <QuestionTimer
        onTimeOut={answer.selectedAnswer === "" ? handleSkipQuestion : null}
        timeout={TIME_OUT}
        mode={answerState}
        key={TIME_OUT}
      />
      <h2>{questionData.text}</h2>
      <Answers
        answerState={answerState}
        onSelectAnswer={onSelectAnswer}
        question={questionData}
        userAnswer={answer.selectedAnswer}
      />
    </div>
  );
};

export default Questsions;
