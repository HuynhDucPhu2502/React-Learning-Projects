import { Outlet } from "react-router-dom";
import { queryClient } from "../queryClient.ts";
import { getAllEvents } from "../api/EventAPI.ts";
import FindEventSection from "../components/FindEventSection.tsx";
import NewEventsSection from "../components/NewEventsSection.tsx";
import EventsIntroSection from "../components/EventsIntroSection.tsx";

const EventsPage = () => {
  return (
    <>
      <Outlet />
      <main>
        <EventsIntroSection />
        <NewEventsSection />
        <FindEventSection />
      </main>
    </>
  );
};

export const Loader = () => {
  return {
    events:
      queryClient.getQueryData(["events"]) ||
      queryClient.fetchQuery({
        queryKey: ["events"],
        queryFn: ({ signal }) => getAllEvents({ signal }),
      }),
  };
};

export default EventsPage;
