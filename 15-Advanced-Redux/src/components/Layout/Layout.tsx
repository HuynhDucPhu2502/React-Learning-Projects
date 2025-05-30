import MainHeader from "./MainHeader";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <MainHeader></MainHeader>
      <main>{children}</main>
    </>
  );
};

export default Layout;
