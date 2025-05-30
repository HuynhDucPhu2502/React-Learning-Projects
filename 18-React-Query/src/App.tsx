import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";

import { route } from "./router";
import { queryClient } from "./queryClient.ts";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={route}></RouterProvider>
    </QueryClientProvider>
  );
}

export default App;
