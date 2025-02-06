import { CustomErrorObject, Event } from "../types/models.ts";

type getAllEventsParams = {
  signal?: AbortSignal;
  searchTerm?: string;
};

export const getAllEvents = async ({
  searchTerm,
  signal,
}: getAllEventsParams) => {
  let url = "http://localhost:3000/events";
  if (searchTerm) {
    url += `?search=${searchTerm}`;
  }

  const response = await fetch(url, {
    signal: signal,
  });

  if (!response.ok) {
    throw {
      title: "API Error",
      message: "Error fetching events",
      status: response.status,
    } as CustomErrorObject;
  }

  const responseData = await response.json();

  return responseData.events;
};

type getEventByIdParams = {
  id: string;
  signal?: AbortSignal;
};

export const getEventById = async ({ id, signal }: getEventByIdParams) => {
  const response = await fetch(`http://localhost:3000/events/${id}`, {
    signal: signal,
  });

  if (!response.ok) {
    throw {
      message: "Error fetching event",
      status: response.status,
    } as CustomErrorObject;
  }

  const responseData = await response.json();

  return responseData.event;
};

export const createNewEvent = async (newEvent: Event) => {
  const response = await fetch("http://localhost:3000/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ event: newEvent }),
  });

  if (!response.ok) {
    throw {
      message: "Error creating event",
      status: response.status,
    } as CustomErrorObject;
  }

  const { event } = await response.json();

  return event;
};

export const getAllImagePaths = async (signal: AbortSignal) => {
  const response = await fetch("http://localhost:3000/events/images", {
    signal,
  });
  if (!response.ok) {
    throw {
      message: "Error fetching image paths",
      status: response.status,
    } as CustomErrorObject;
  }

  const responseData = await response.json();
  return responseData.images;
};

export const deleteEventById = async (id: string) => {
  const response = await fetch(`http://localhost:3000/events/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw {
      message: "Error deleting event",
      status: response.status,
    } as CustomErrorObject;
  }

  return await response.json();
};

type updateEventByIdParams = {
  id: string;
  event: Event;
};

export const updateEventById = async ({ id, event }: updateEventByIdParams) => {
  const response = await fetch(`http://localhost:3000/events/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ event }),
  });

  if (!response.ok) {
    throw {
      message: "Error updating event",
      status: response.status,
    } as CustomErrorObject;
  }

  return await response.json();
};
