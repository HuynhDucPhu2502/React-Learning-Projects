import { Event } from "../types/models.ts";
import { FC } from "react";
import { Link } from "react-router-dom";

type Props = {
  event: Event;
  onStartDelete: () => void;
};

const EventDetailsCard: FC<Props> = ({ event, onStartDelete }) => {
  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <article id="event-details">
      <header>
        <h1>{event.title}</h1>
        <nav>
          <button onClick={onStartDelete}>Delete</button>
          <Link to="edit">Edit</Link>
          <Link to=".." style={{ color: "white" }}>
            Back
          </Link>
        </nav>
      </header>
      <div id="event-details-content">
        <img src={`http://localhost:3000/${event.image}`} alt={event.title} />
        <div id="event-details-info">
          <div>
            <p id="event-details-location">{event.location}</p>
            <time dateTime={`Todo-DateT$Todo-Time`}>
              {formattedDate} @ {event.time}
            </time>
          </div>
          <p id="event-details-description">{event.description}</p>
        </div>
      </div>
    </article>
  );
};

export default EventDetailsCard;
