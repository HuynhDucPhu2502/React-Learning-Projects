import quizCompleteImg from "../assets/quiz-complete.png";
import { Question } from "../types/Question";
import { Questions } from "../Questions";

type Props = {
  userAnswers: (string | null)[];
};

const Summary: React.FC<Props> = ({ userAnswers }) => {
  const skippedAnswer = userAnswers.filter((answer) => answer === null).length;
  const correctAnswer = userAnswers.filter(
    (answer, index) => answer === Questions[index].answers[0]
  ).length;
  const wrongAnswer = userAnswers.filter(
    (answer, index) => answer !== Questions[index].answers[0]
  ).length;

  const skippedAnswerShares = Math.round(
    (skippedAnswer / userAnswers.length) * 100
  );
  const correctAnswerShares = Math.round(
    (correctAnswer / userAnswers.length) * 100
  );
  const wrongAnswerShares =
    Math.round((wrongAnswer / userAnswers.length) * 100) - skippedAnswerShares;

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="trophy logo" />
      <h2>Quiz Complete</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswerShares}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswerShares}%</span>
          <span className="text">Correct Answer</span>
        </p>
        <p>
          <span className="number">{wrongAnswerShares}%</span>
          <span className="text">Wrong Answer</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          const isAnswerCorrect = answer === Questions[index].answers[0];
          let cssClass = "user-answer";
          if (answer === null) cssClass += " skipped";
          else if (isAnswerCorrect === true) cssClass += " correct";
          else if (isAnswerCorrect === false) cssClass += " wrong";

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{Questions[index].text}</p>
              <p className={cssClass}>{answer ?? "skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;
