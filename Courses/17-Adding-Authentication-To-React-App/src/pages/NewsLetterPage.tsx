import { ActionFunctionArgs } from "react-router-dom";

import NewLetterSignup from "../components/NewLetterSignup";

const NewsLetterPage = () => {
  return (
    <>
      <NewLetterSignup></NewLetterSignup>
    </>
  );
};

export const Action = async ({ request }: ActionFunctionArgs) => {
  const data = await request.formData();
  const email = data.get("email");

  console.log(email);
  return { message: "Signup successful!" };
};

export default NewsLetterPage;
