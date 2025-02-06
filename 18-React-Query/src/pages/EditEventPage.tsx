import { useNavigate, useParams, useRouteLoaderData } from "react-router-dom";
import { CustomErrorObject, Event } from "../types/models.ts";
import Modal from "../components/UI/Modal.tsx";
import EventForm from "../components/EventForm.tsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getEventById, updateEventById } from "../api/EventAPI.ts";
import ErrorBlock from "../components/UI/ErrorBlock.tsx";
import LoadingIndicator from "../components/UI/LoadingIndicator.tsx";
import { queryClient } from "../queryClient.ts";

const EditEventPage = () => {
  const navigate = useNavigate();
  const { event } = useRouteLoaderData("event-detail") as { event: Event };

  let { id } = useParams();
  if (!id) id = "e9999";

  const { data, isPending, isError, error } = useQuery<Event>({
    queryKey: ["events", id],
    queryFn: ({ signal }) => getEventById({ id, signal }),
    initialData: event,
  });

  const {
    mutate,
    isPending: isPendingUpdate,
    isError: isUpdateError,
    error: updateError,
  } = useMutation({
    mutationFn: updateEventById,
    onMutate: async ({ id, event }) => {
      const newEvent = { ...event };

      const previousEvent = queryClient.getQueryData(["events", id]);
      await queryClient.cancelQueries({ queryKey: ["events", id] });
      queryClient.setQueryData(["events", id], newEvent);

      return { previousEvent };
    },
    onError: (_error, _variables, context) => {
      queryClient.setQueryData(["events", id], context?.previousEvent);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      queryClient.invalidateQueries({ queryKey: ["events", id] });
    },
    onSuccess: () => {
      navigate("..");
    },
  });

  const handleCancel = () => {
    navigate("..");
  };

  function handleSubmit(event: Event) {
    mutate({ id: event.id, event: event });
  }

  let errorBlock;
  if (isError) {
    const customError = error as unknown as CustomErrorObject;
    errorBlock = <ErrorBlock error={customError}></ErrorBlock>;
  }

  let errorUpdateBlock;
  if (isUpdateError) {
    const customError = updateError as unknown as CustomErrorObject;
    errorUpdateBlock = <ErrorBlock error={customError}></ErrorBlock>;
  }

  return (
    <Modal onClose={handleCancel}>
      {isPending && <LoadingIndicator></LoadingIndicator>}
      {!isPending && (
        <>
          <EventForm onSubmit={handleSubmit} inputData={data}>
            {isPendingUpdate && <p>Updating...</p>}
            {!isPendingUpdate && (
              <>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="button-text"
                >
                  Close
                </button>
                <button type="submit" className="button">
                  Update
                </button>
              </>
            )}
          </EventForm>
          {errorUpdateBlock}
        </>
      )}
      {isError && errorBlock}
    </Modal>
  );
};

export default EditEventPage;
