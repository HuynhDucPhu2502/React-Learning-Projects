import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootPage } from "./pages/RootPage";
import { HomePage } from "./pages/HomePage";
import { CartPage } from "./pages/CartPage";
import { MovieDetailsPage } from "./pages/MovieDetailsPage";
import { CartContextProvider } from "./context/CartContext";

const router = createBrowserRouter([
  {
    element: <RootPage />,
    path: "/",
    children: [
      { element: <HomePage />, path: "" },
      { element: <CartPage />, path: "/cart" },
      { element: <MovieDetailsPage />, path: "/movie/:id" },
    ],
  },
]);

function App() {
  return (
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  );
}

export default App;
