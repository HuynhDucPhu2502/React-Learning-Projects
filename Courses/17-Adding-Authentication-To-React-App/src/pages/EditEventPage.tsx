import { useRouteLoaderData } from "react-router-dom";

import EventForm from "../components/EventForm";
import { Event } from "../types/models";

const EditEventPage = () => {
  const data = useRouteLoaderData("event-detail");

  const event: Event | undefined = data?.event;

  if (!event) {
    return <p>Event not found</p>;
  }

  return (
    <>
      <EventForm event={event ?? undefined} method="PATCH"></EventForm>
    </>
  );
};

export default EditEventPage;
