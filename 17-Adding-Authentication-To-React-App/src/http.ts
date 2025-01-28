import {
  redirect,
  ActionFunctionArgs,
  LoaderFunctionArgs,
} from "react-router-dom";

import { Event, CustomErrorObject } from "./types/models";

export const getAllEventsAction = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw {
      message: "Could not fetch events.",
      status: 500,
    } as CustomErrorObject;
  }

  const responseData = await response.json();
  return responseData;
};

export const getOneEventAction = async ({ params }: LoaderFunctionArgs) => {
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

export const postEventAction = async ({ request }: ActionFunctionArgs) => {
  const data = await request.formData();

  const event: Event = {
    id: Math.random().toString(),
    title: data.get("title") as string,
    image: data.get("image") as string,
    date: data.get("date") as string,
    description: data.get("description") as string,
  };

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  });

  if (!response.ok) {
    throw {
      message: "Adding the event failed.",
      status: 500,
    } as CustomErrorObject;
  }

  return redirect("/events");
};
