import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Header: FC<Props> = ({ children }) => {
  return (
    <>
      <div id="main-header-loading"></div>
      <header id="main-header">
        <div id="header-title">
          <h1>React Events</h1>
        </div>
        <nav>{children}</nav>
      </header>
    </>
  );
};

export default Header;
