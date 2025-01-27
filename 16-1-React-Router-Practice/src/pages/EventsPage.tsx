import EventsList from "../components/EventsList";

import { CustomErrorObject, Event } from "../types/models";
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

const EventsPage = () => {
  const { events } = useLoaderData() as { events: Event[] };

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents: Event[]) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
};

const loadEvents = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw {
      message: "Could not fetch events.",
      status: 500,
    } as CustomErrorObject;
  }

  const responseData = await response.json();
  return responseData.events;
};

export const Loader = () => {
  return {
    events: loadEvents(),
  };
};

export default EventsPage;
