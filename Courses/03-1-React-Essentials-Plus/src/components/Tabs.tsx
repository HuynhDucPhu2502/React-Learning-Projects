type Props = {
  children: React.ReactNode;
  buttons: React.ReactNode;
  Wrapper?: React.ElementType;
};

const Tabs: React.FC<Props> = ({ children, buttons, Wrapper = "menu" }) => {
  return (
    <>
      <Wrapper>{buttons}</Wrapper>
      {children}
    </>
  );
};

export default Tabs;
