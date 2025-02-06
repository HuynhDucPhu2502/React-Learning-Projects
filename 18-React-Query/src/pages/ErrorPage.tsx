import Header from "../components/Header.tsx";
import { Link } from "react-router-dom";
import { CustomErrorObject } from "../types/models.ts";
import { FC } from "react";

type Props = {
  error?: CustomErrorObject;
};

const ErrorPage: FC<Props> = ({ error }) => {
  const title = error?.title ?? "An error occurred!";
  const message = error?.message ?? "Something went wrong!";

  return (
    <>
      <Header>
        <Link to=".." className="button">
          Home Page
        </Link>
      </Header>
      <main
        className="error-block"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "50%",
          margin: "1rem auto",
          padding: "1rem",
        }}
      >
        <div className="error-block-icon">!</div>
        <div className="error-block-text">
          <h2>{title}</h2>
          <p>{message}</p>
        </div>
      </main>
    </>
  );
};

export default ErrorPage;
