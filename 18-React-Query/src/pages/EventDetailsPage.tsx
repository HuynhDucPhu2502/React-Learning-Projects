import {
  LoaderFunctionArgs,
  Outlet,
  useNavigate,
  useParams,
} from "react-router-dom";
import { CustomErrorObject, Event } from "../types/models.ts";
import EventDetailsCard from "../components/EventDetailsCard.tsx";
import { queryClient } from "../queryClient.ts";
import { deleteEventById, getEventById } from "../api/EventAPI.ts";
import { useMutation, useQuery } from "@tanstack/react-query";
import LoadingIndicator from "../components/UI/LoadingIndicator.tsx";
import { useState } from "react";
import Modal from "../components/UI/Modal.tsx";
import ErrorBlock from "../components/UI/ErrorBlock.tsx";

const EventDetailsPage = () => {
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);

  let { id } = useParams();
  if (!id) id = "e9999";

  const { data, isLoading, isError, error } = useQuery<Event>({
    queryKey: ["events", id],
    queryFn: ({ signal }) => getEventById({ id, signal }),
  });

  const {
    mutate,
    isPending: isPendingDeletion,
    isError: isErrorDeleting,
    error: deleteError,
  } = useMutation({
    mutationFn: deleteEventById,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
        refetchType: "none",
      });
      navigate("..");
    },
  });

  const handleStartDeletion = () => {
    setIsDeleting(true);
  };

  const handleStopDeletion = () => {
    setIsDeleting(false);
  };

  const handleDelete = () => {
    mutate(id);
  };

  if (isLoading) return <LoadingIndicator />;
  if (isError) {
    const customError = error as unknown as CustomErrorObject;
    return <ErrorBlock error={customError}></ErrorBlock>;
  }

  let errorDeleteBlock;
  if (isErrorDeleting) {
    const customError = deleteError as unknown as CustomErrorObject;
    errorDeleteBlock = <ErrorBlock error={customError}></ErrorBlock>;
  }

  return (
    <>
      <Outlet></Outlet>
      {isDeleting && (
        <Modal onClose={handleDelete}>
          <h2>Are you sure?</h2>
          <p>
            Do you really want to delete this event? This action cannot be
            undone.
          </p>
          <div className="form-actions">
            {isPendingDeletion && <p>Deleting, please wait...</p>}
            {!isPendingDeletion && (
              <>
                <button onClick={handleStopDeletion} className="button-text">
                  Cancel
                </button>
                <button onClick={handleDelete} className="button">
                  Delete
                </button>
              </>
            )}
          </div>
          {errorDeleteBlock}
        </Modal>
      )}
      {data && (
        <EventDetailsCard event={data} onStartDelete={handleStartDeletion} />
      )}
    </>
  );
};

export const Loader = ({ params }: LoaderFunctionArgs) => {
  const id = params.id;
  if (!id) {
    throw {
      message: "No event id provided",
    } as CustomErrorObject;
  }

  return {
    event:
      queryClient.getQueryData(["events", id]) ||
      queryClient.fetchQuery({
        queryKey: ["events", id],
        queryFn: () => getEventById({ id }),
      }),
  };
};

export default EventDetailsPage;
