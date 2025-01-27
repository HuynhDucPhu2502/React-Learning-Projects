import { useRouteLoaderData } from "react-router-dom";

import EventForm from "../components/EventForm";
import { Event } from "../types/models";

const EditEventPage = () => {
  const event = useRouteLoaderData<Event>("event-detail");

  return (
    <>
      <EventForm event={event ?? undefined} method="PATCH"></EventForm>
    </>
  );
};

export default EditEventPage;
