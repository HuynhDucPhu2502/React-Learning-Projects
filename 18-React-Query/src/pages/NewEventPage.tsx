import { Link, useNavigate } from "react-router-dom";
import { CustomErrorObject, Event } from "../types/models.ts";
import Modal from "./../components/UI/Modal.tsx";
import EventForm from "../components/EventForm.tsx";
import { useMutation } from "@tanstack/react-query";
import { createNewEvent } from "../api/EventAPI.ts";
import ErrorBlock from "../components/UI/ErrorBlock.tsx";
import { queryClient } from "../queryClient.ts";

const NewEvent = () => {
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createNewEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      navigate("..");
    },
  });

  function handleSubmit(event: Event) {
    mutate(event);
  }

  let errorBlock;
  if (isError) {
    const customError = error as unknown as CustomErrorObject;
    errorBlock = <ErrorBlock error={customError}></ErrorBlock>;
  }

  return (
    <Modal onClose={() => navigate("..")}>
      <EventForm onSubmit={handleSubmit}>
        {isPending && <p>Submitting...</p>}
        {!isPending && (
          <>
            <Link to=".." className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Create
            </button>
          </>
        )}
      </EventForm>
      {errorBlock}
    </Modal>
  );
};

export default NewEvent;
