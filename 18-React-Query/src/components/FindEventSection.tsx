import { FormEvent, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { CustomErrorObject, Event } from "../types/models.ts";
import { getAllEvents } from "../api/EventAPI.ts";
import LoadingIndicator from "./UI/LoadingIndicator.tsx";
import EventItem from "./EventItem.tsx";
import ErrorPage from "../pages/ErrorPage.tsx";

const FindEventSection = () => {
  const searchElement = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState<string>();

  const { data, isLoading, isError, error } = useQuery<Event[]>({
    queryKey: ["events", { searchTerm: searchTerm }],
    queryFn: ({ signal }) =>
      getAllEvents({ signal: signal, searchTerm: searchTerm }),
    enabled: searchTerm !== undefined,
  });

  let content;
  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <EventItem key={event.id} event={event} />
        ))}
      </ul>
    );
  } else if (isLoading) content = <LoadingIndicator />;
  else if (isError) {
    const customError = error as unknown as CustomErrorObject;
    return <ErrorPage error={customError}></ErrorPage>;
  } else content = <p>Please enter a search term and to find events.</p>;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchTerm(searchElement.current?.value ?? "");
  };

  return (
    <section className="content-section" id="all-events-section">
      <header>
        <h2>Find your next event!</h2>
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="search"
            placeholder="Search events"
            ref={searchElement}
          />
          <button>Search</button>
        </form>
      </header>

      {content}
    </section>
  );
};

export default FindEventSection;
