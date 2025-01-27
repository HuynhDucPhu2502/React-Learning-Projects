import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootPage from "./pages/RootPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import EventsRootPage from "./pages/EventsRootPage";
import EventsPage, { Loader as EventsLoader } from "./pages/EventsPage";
import EventDetailPage, {
  Loader as EventDetailLoader,
  Action as EventDeleteAction,
} from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import { Action as manipulateEventAction } from "./components/EventForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage></RootPage>,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage></HomePage> },
      {
        path: "events",
        element: <EventsRootPage></EventsRootPage>,
        children: [
          {
            index: true,
            element: <EventsPage></EventsPage>,
            loader: EventsLoader,
          },
          {
            path: ":id",
            id: "event-detail",
            loader: EventDetailLoader,
            action: EventDeleteAction,
            children: [
              { path: "", element: <EventDetailPage></EventDetailPage> },
              {
                path: "edit",
                element: <EditEventPage></EditEventPage>,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage></NewEventPage>,
            action: manipulateEventAction,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
