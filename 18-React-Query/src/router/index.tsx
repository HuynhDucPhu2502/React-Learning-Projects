import { createBrowserRouter, Navigate } from "react-router-dom";
import RootPage from "../pages/RootPage.tsx";
import ErrorPage from "../pages/ErrorPage.tsx";
import EventsPage, { Loader as EventsLoader } from "../pages/EventsPage.tsx";
import NewEvent from "../pages/NewEventPage.tsx";
import EventDetailsPage, {
  Loader as EventLoader,
} from "../pages/EventDetailsPage.tsx";
import EditEventPage from "../pages/EditEventPage.tsx";

export const route = createBrowserRouter([
  {
    path: "",
    element: <RootPage />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <Navigate to="events" replace /> },
      {
        path: "events",
        id: "events",
        loader: EventsLoader,
        children: [
          {
            path: "",
            element: <EventsPage></EventsPage>,
            children: [{ path: "new", element: <NewEvent /> }],
          },
          {
            path: ":id",
            id: "event-detail",
            loader: EventLoader,
            element: <EventDetailsPage></EventDetailsPage>,
            children: [
              {
                path: "edit",
                element: <EditEventPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
