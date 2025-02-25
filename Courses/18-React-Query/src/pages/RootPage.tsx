import { Link, Outlet } from "react-router-dom";

import Header from "../components/Header.tsx";

const RootPage = () => {
  return (
    <>
      <Header>
        <Link to="/events/new" className="button">
          New Event
        </Link>
      </Header>
      <Outlet />
    </>
  );
};

export default RootPage;
