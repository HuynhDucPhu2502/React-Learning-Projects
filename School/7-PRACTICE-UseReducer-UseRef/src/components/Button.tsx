type Props = {
  style: string;
  onClick: () => void;
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({ style, onClick, children }) => {
  return (
    <button
      className={`${style} px-2 py-1 text-white min-w-[100px] rounded-lg`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
