import { useState, useCallback } from "react";

import { Questions as QuestionsData } from "../Questions";
import Questsions from "./Questions";
import Summary from "./Summary";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);
  const isQuizComplete = userAnswers.length === QuestionsData.length;

  const activeQuestionIndex = userAnswers.length;

  const handleSelectAnswer = useCallback((answer: string | null) => {
    setUserAnswers((prevState) => {
      return [...prevState, answer];
    });
  }, []);

  if (isQuizComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Questsions
        questionData={QuestionsData[activeQuestionIndex]}
        handleSelectAnswer={handleSelectAnswer}
        userAnswer={userAnswers[activeQuestionIndex]}
        key={activeQuestionIndex}
      />
    </div>
  );
};

export default Quiz;
