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
import NewsLetterPage from "./pages/NewsLetterPage";
import { Action as NewsLetterAction } from "./pages/NewsLetterPage";
import AuthenticationPage, {
  Action as AuthenticationAction,
} from "./pages/AuthenticationPage";
import { Action as LogoutAction } from "./pages/Logout";
import { tokenLoader, checkAuthLoader } from "./utils/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage></RootPage>,
    errorElement: <ErrorPage />,
    loader: tokenLoader,
    id: "root",
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
                loader: checkAuthLoader,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage></NewEventPage>,
            action: manipulateEventAction,
            loader: checkAuthLoader,
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsLetterPage></NewsLetterPage>,
        action: NewsLetterAction,
      },
      {
        path: "auth",
        element: <AuthenticationPage></AuthenticationPage>,
        action: AuthenticationAction,
      },
      {
        path: "logout",
        action: LogoutAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
