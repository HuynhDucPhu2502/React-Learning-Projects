type Props = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  children: React.ReactNode;
};

const Section: React.FC<Props> = ({ title, children, ...props }) => {
  return (
    <section {...props}>
      <h1 className="text-center font-bold text-5xl my-12">{title}</h1>
      {children}
    </section>
  );
};

export default Section;
