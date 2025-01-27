import { ActionFunctionArgs, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

import { Event, CustomErrorObject } from "../types/models";

const NewEventPage = () => {
  return (
    <>
      <EventForm method="POST"></EventForm>
    </>
  );
};

export const Action = async ({ request }: ActionFunctionArgs) => {
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

  if (response.status === 422) {
    return await response.json();
  }

  if (!response.ok) {
    throw {
      message: "Adding the event failed.",
      status: 500,
    } as CustomErrorObject;
  }

  return redirect("/events");
};

export default NewEventPage;
