import classes from "./NewsletterSignup.module.css";

import { useFetcher } from "react-router-dom";
import { useEffect } from "react";

const NewLetterSignup = () => {
  const fetcher = useFetcher();

  const { data, state } = fetcher;

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]);

  return (
    <div style={{ textAlign: "center" }}>
      <fetcher.Form
        method="post"
        action="/newsletter"
        className={classes.newsletter}
      >
        <input
          type="email"
          placeholder="Sign up for newsletter..."
          aria-label="Sign up for newsletter"
        />
        <button>Sign up</button>
      </fetcher.Form>
    </div>
  );
};

export default NewLetterSignup;
