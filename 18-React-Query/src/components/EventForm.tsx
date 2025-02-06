import { Event, Image } from "../types/models.ts";
import { FC, FormEvent, ReactNode, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllImagePaths } from "../api/EventAPI.ts";
import ImagePicker from "./ImagePicker.tsx";

type Props = {
  inputData?: Event;
  onSubmit: (event: Event) => void;
  children: ReactNode;
};

const EventForm: FC<Props> = ({ inputData, onSubmit, children }) => {
  const [selectedImage, setSelectedImage] = useState<string>(
    inputData?.image ?? "",
  );
  const { data, isPending } = useQuery<Image[]>({
    queryKey: ["images"],
    queryFn: ({ signal }) => getAllImagePaths(signal),
  });

  function handleSelectImage(image: string) {
    setSelectedImage(image);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData) as Record<string, string>;

    const formattedEvent: Event = {
      id: inputData?.id || Date.now().toString(),
      title: data.title,
      description: data.description,
      date: new Date(data.date),
      time: data.time,
      location: data.location,
      image: selectedImage,
    };

    onSubmit(formattedEvent);
  }

  return (
    <form id="event-form" onSubmit={handleSubmit}>
      <p className="control">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={inputData?.title ?? ""}
        />
      </p>

      <div className="control">
        {isPending && <p>Loading selectable images... </p>}
        {data && (
          <ImagePicker
            images={data}
            onSelect={handleSelectImage}
            selectedImage={selectedImage}
          />
        )}
      </div>

      <p className="control">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          defaultValue={inputData?.description ?? ""}
        />
      </p>

      <div className="controls-row">
        <p className="control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            defaultValue={
              inputData?.date
                ? new Date(inputData.date).toISOString().split("T")[0]
                : ""
            }
          />
        </p>

        <p className="control">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            name="time"
            defaultValue={inputData?.time ?? ""}
          />
        </p>
      </div>

      <p className="control">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          defaultValue={inputData?.location ?? ""}
        />
      </p>

      <p className="form-actions">{children}</p>
    </form>
  );
};

export default EventForm;
