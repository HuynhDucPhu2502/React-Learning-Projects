import classes from "./Card.module.css";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Card: React.FC<Props> = ({ className, children }) => {
  return (
    <section className={`${classes.card} ${className ? className : ""}`}>
      {children}
    </section>
  );
};

export default Card;
