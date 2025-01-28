import {
  useRouteLoaderData,
  LoaderFunctionArgs,
  redirect,
  Await,
} from "react-router-dom";

import { Suspense } from "react";

import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

import { CustomErrorObject } from "../types/models";
import { Event } from "../types/models";
import { getAuthToken } from "../utils/auth";

const EventDetailPage = () => {
  let event: Event | undefined;
  let events: Event[] | undefined;

  try {
    const data = useRouteLoaderData<{ event: Event; events: Event[] }>(
      "event-detail"
    );
    if (!data) throw new Error("Data not found.");

    event = data.event;
    events = data.events;
  } catch (error) {
    const erroMessage =
      error instanceof Error ? error.message : "Something went wrong!";
    return (
      <>
        <p style={{ textAlign: "center" }}>{erroMessage}</p>
      </>
    );
  }

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent}></EventItem>}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
};

const loadEvent = async (id: string) => {
  const reponse = await fetch(`http://localhost:8080/events/${id}`);

  if (!reponse.ok) {
    throw {
      message: "Could not fetch event details.",
      status: 500,
    } as CustomErrorObject;
  }

  const responseData = await reponse.json();
  return responseData.event;
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

export const Loader = async ({ params }: LoaderFunctionArgs) => {
  const id = params?.id;
  if (!id) throw new Error("Missing event id.");

  return {
    event: await loadEvent(id),
    events: loadEvents(),
  };
};

export const Action = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params;
  const token = getAuthToken();

  if (token === null) {
    throw {
      message: "Not authenticated.",
      status: 401,
    } as CustomErrorObject;
  }

  const response = await fetch(`http://localhost:8080/events/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw {
      message: "Deleting the event failed.",
      status: 500,
    } as CustomErrorObject;
  }

  return redirect("/events");
};

export default EventDetailPage;
