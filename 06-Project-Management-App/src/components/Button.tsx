type Props = {
  title: string;
} & React.HTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({ title, ...props }) => {
  return (
    <button
      {...props}
      className="px-8 py-3 bg-gray-500 hover:bg-gray-400 text-gray-300 hover:text-gray-200 w-fit my-12 rounded-lg"
    >
      {title}
    </button>
  );
};

export default Button;
