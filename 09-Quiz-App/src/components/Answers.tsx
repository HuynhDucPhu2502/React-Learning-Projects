import { useRef } from "react";
import { Question } from "../types/Question";

type Props = {
  question: Question;
  answerState: string;
  onSelectAnswer: (answer: string) => void;
  userAnswer: string | null;
};

const Answers: React.FC<Props> = ({
  question,
  answerState,
  onSelectAnswer,
  userAnswer,
}) => {
  const shuffledQuestions = useRef<string[]>();
  if (!shuffledQuestions.current) {
    shuffledQuestions.current = [...question.answers];
    shuffledQuestions.current = [...question.answers].sort(
      () => Math.random() - 0.5
    );
  }

  return (
    <ul id="answers">
      {shuffledQuestions.current.map((answer) => {
        const isAnswerSelected = answer === userAnswer;
        let cssClasses = "";
        if (answerState === "answered" && isAnswerSelected)
          cssClasses = "selected";

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isAnswerSelected
        )
          cssClasses = answerState;

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelectAnswer(answer)}
              className={cssClasses}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
