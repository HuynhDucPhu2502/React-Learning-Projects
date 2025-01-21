type Props = {
  children?: React.ReactNode;
  textOnly?: boolean;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({
  children,
  textOnly,
  className,
  ...props
}) => {
  let cssClasses = textOnly ? "text-button" : "button";
  cssClasses += " " + className;

  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
