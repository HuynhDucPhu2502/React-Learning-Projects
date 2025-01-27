import MainNavigation from "../components/MainNavigation";

import { useRouteError } from "react-router-dom";
import { CustomErrorObject } from "../types/models";

const ErrorPage = () => {
  const error = useRouteError() as CustomErrorObject;

  let title = "An error occurred!";
  let message = "Something went wrong!";

  if (error && typeof error === "object" && "status" in error) {
    if (error.status === 500) {
      title = "Server Error";
      message = error.message || "Fetching events failed!";
    } else if (error.status === 404) {
      title = "Not Found!";
      message = "The requested resource was not found.";
    }
  }

  return (
    <>
      <MainNavigation />
      <main>
        <h1>{title}</h1>
        <p>{message}</p>
      </main>
    </>
  );
};

export default ErrorPage;
