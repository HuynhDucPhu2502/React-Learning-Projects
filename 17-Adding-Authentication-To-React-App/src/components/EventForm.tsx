import {
  useNavigate,
  Form,
  useNavigation,
  useActionData,
  HTMLFormMethod,
  ActionFunctionArgs,
  redirect,
} from "react-router-dom";

import { Event, CustomErrorObject } from "../types/models";

import { getAuthToken } from "../utils/auth";

import classes from "./EventForm.module.css";

type Props = {
  event?: Event;
  method: HTMLFormMethod;
};

const EventForm: React.FC<Props> = ({ method, event }) => {
  const navigate = useNavigate();
  const navigation = useNavigation();

  let errors: string[] = [];
  const data = useActionData();
  if (data) errors = Object.values(data.errors);

  const isSubmitting = navigation.state === "submitting";

  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method={method} className={classes.form}>
      <ul>{data && errors.map((error) => <li key={error}>{error}</li>)}</ul>
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          defaultValue={event?.title}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" defaultValue={event?.image} />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" defaultValue={event?.date} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows={5}
          defaultValue={event?.description}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Save"}
        </button>
      </div>
    </Form>
  );
};

export const Action = async ({ request, params }: ActionFunctionArgs) => {
  const token = getAuthToken();
  if (token === null) {
    throw {
      message: "Not authenticated.",
      status: 401,
    };
  }

  const data = await request.formData();

  const event: Event = {
    id: params.id ?? Math.random().toString(),
    title: data.get("title") as string,
    image: data.get("image") as string,
    date: data.get("date") as string,
    description: data.get("description") as string,
  };

  let url = "http://localhost:8080/events";

  if (request.method === "PATCH") {
    url = `${url}/${event.id}`;
  }

  const response = await fetch(url, {
    method: request.method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(event),
  });

  if (response.status === 422) {
    return await response.json();
  }

  if (!response.ok) {
    throw {
      message: "Adding/Editing the event failed.",
      status: 500,
    } as CustomErrorObject;
  }

  return redirect("/events");
};

export default EventForm;
