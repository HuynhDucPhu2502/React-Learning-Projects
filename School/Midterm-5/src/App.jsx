import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootPage } from "./pages/RootPage";
import { HomePage } from "./pages/HomePage";
import { BookDetailsPage } from "./pages/BookDetailsPage";
import { CartPage } from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/book/:id", element: <BookDetailsPage /> },
    ],
  },
]);

const App = () => {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;
