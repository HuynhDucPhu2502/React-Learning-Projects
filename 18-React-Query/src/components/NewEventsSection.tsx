import { CustomErrorObject, Event } from "../types/models.ts";
import EventItem from "./EventItem.tsx";
import LoadingIndicator from "./UI/LoadingIndicator.tsx";
import { useQuery } from "@tanstack/react-query";
import { getAllEvents } from "../api/EventAPI.ts";
import ErrorPage from "../pages/ErrorPage.tsx";

const NewEventsSection = () => {
  const { data, isPending, isError, error } = useQuery<Event[]>({
    queryKey: ["events"],
    queryFn: ({ signal }) => getAllEvents({ signal: signal }),
  });

  if (isPending) return <LoadingIndicator />;
  if (isError) {
    const customError = error as unknown as CustomErrorObject;
    return <ErrorPage error={customError}></ErrorPage>;
  }

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {data && (
        <ul className="events-list">
          {data.map((event) => (
            <EventItem key={event.id} event={event} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default NewEventsSection;
