import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/RootPage";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import { FoodOrderingProvider } from "./context/FoodOrderingContext";

// Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
    ],
  },
]);

function App() {
  return (
    <FoodOrderingProvider>
      <RouterProvider router={router} />
    </FoodOrderingProvider>
  );
}

export default App;
