type Props = {
  title: string;
  message: string;
};

const ErrorBox: React.FC<Props> = ({ title, message }) => {
  return (
    <div className="error">
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

export default ErrorBox;
