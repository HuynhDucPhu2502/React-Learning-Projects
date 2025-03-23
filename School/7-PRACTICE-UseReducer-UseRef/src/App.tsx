import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CounterPage from "./layouts/CounterPage";
import HomePage from "./layouts/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/counter",
    element: <CounterPage />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
