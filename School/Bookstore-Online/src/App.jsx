import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import BookPage from "./pages/BookPage";
import CartPage from "./pages/CartPage";
import { CartContextProvider } from "./context/CartContext";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "book/:id", element: <BookPage /> },
      { path: "cart", element: <CartPage /> },
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
