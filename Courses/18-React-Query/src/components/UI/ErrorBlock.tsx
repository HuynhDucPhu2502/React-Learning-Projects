import { CustomErrorObject } from "../../types/models.ts";
import { FC } from "react";

type Props = {
  error?: CustomErrorObject;
};

const ErrorPage: FC<Props> = ({ error }) => {
  const title = error?.title ?? "An error occurred!";
  const message = error?.message ?? "Something went wrong!";

  return (
    <>
      <main className="error-block">
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
