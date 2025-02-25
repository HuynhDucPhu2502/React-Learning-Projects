import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import useInput from "../hooks/useInput";

const Login = () => {
  const {
    enteredValue: emailEnteredValue,
    handleOnChange: handleEmailOnChange,
    handleOnBlur: handleEmailOnBlur,
    hasError: emailHasError,
  } = useInput("", (value: string) => isEmail(value) && isNotEmpty(value));

  const {
    enteredValue: passwordEnteredValue,
    handleOnChange: handlePasswordOnChange,
    handleOnBlur: handlePasswordOnBlur,
    hasError: passwordIsInvalid,
  } = useInput("", (value: string) => hasMinLength(value, 6));

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // console.log(enteredValue);
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          onChange={handleEmailOnChange}
          onBlur={handleEmailOnBlur}
          error={emailHasError ? "Please enter a valid email." : ""}
          value={emailEnteredValue}
        ></Input>

        <Input
          label="Password"
          id="password"
          type="password"
          onChange={handlePasswordOnChange}
          onBlur={handlePasswordOnBlur}
          error={passwordIsInvalid ? "Please enter a valid password." : ""}
          value={passwordEnteredValue}
        ></Input>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
};

export default Login;
