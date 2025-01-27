import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

const RootPage = () => {
  return (
    <>
      <MainNavigation></MainNavigation>
      <Outlet></Outlet>
    </>
  );
};

export default RootPage;
