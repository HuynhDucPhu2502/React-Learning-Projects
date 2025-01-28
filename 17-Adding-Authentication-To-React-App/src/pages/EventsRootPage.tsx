import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

const EventsRootPage = () => {
  return (
    <>
      <EventsNavigation></EventsNavigation>
      <Outlet></Outlet>
    </>
  );
};

export default EventsRootPage;
