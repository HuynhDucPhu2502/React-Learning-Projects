import classes from "./EventItem.module.css";

import { Event } from "../types/models";
import { NavLink, useSubmit, useRouteLoaderData } from "react-router-dom";

type Props = {
  event?: Event;
};

const EventItem: React.FC<Props> = ({ event }) => {
  const submit = useSubmit();
  const token = useRouteLoaderData("root");

  function startDeleteHandler() {
    const proceed = window.confirm(
      "Are you sure you want to delete this event?"
    );

    if (proceed) {
      submit(null, { method: "delete" });
    }
  }

  return (
    <article className={classes.event}>
      <img src={event?.image} alt={event?.title} />
      <h1>{event?.title}</h1>
      <time>{event?.date}</time>
      <p>{event?.description}</p>
      {token && (
        <menu className={classes.actions}>
          <NavLink to={`edit`}>Edit</NavLink>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      )}
    </article>
  );
};

export default EventItem;
