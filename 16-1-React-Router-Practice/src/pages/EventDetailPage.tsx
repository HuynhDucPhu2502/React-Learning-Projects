import {
  useRouteLoaderData,
  LoaderFunctionArgs,
  redirect,
  ActionFunctionArgs,
} from "react-router-dom";

import EventItem from "../components/EventItem";

import { CustomErrorObject } from "../types/models";
import { Event } from "../types/models";

const EventDetailPage = () => {
  const event = useRouteLoaderData<Event>("event-detail");

  return (
    <>
      <EventItem event={event}></EventItem>
    </>
  );
};

export const Loader = async ({
  params,
}: LoaderFunctionArgs & ActionFunctionArgs) => {
  const { id } = params;

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

export const Action = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params;
  const response = await fetch(`http://localhost:8080/events/${id}`, {
    method: "DELETE",
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
