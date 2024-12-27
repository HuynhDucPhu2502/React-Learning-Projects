type userInput = {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
};

type Props = {
  userInput: userInput;
  handleOnChange: (inputIdentifier: string, value: number) => void;
};

const UserInput: React.FC<Props> = ({ userInput, handleOnChange }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            onChange={(e) =>
              handleOnChange("initialInvestment", Number(e.target.value))
            }
            value={userInput.initialInvestment}
            required
          />
        </p>
        <p>
          <label htmlFor="">Anual Investment</label>
          <input
            type="number"
            onChange={(e) =>
              handleOnChange("annualInvestment", Number(e.target.value))
            }
            value={userInput.annualInvestment}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Run</label>
          <input
            type="number"
            onChange={(e) =>
              handleOnChange("expectedReturn", Number(e.target.value))
            }
            value={userInput.expectedReturn}
            required
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            onChange={(e) => handleOnChange("duration", Number(e.target.value))}
            value={userInput.duration}
            required
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
