import MainNavigation from "../components/MainNavigation";

import { useRouteError } from "react-router-dom";
import { CustomErrorObject } from "../types/models";

const ErrorPage = () => {
  const error = useRouteError() as CustomErrorObject;

  let title = "An error occurred!";
  const message = error.message ?? "Something went wrong!";

  if (error.status === 400) title = "Not Found!";
  else if (error.status === 500) title = "Server Error";

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
