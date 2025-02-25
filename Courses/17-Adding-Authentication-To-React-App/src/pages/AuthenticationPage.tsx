import AuthForm from "../components/AuthForm";
import { CustomErrorObject } from "../types/models";
import { ActionFunctionArgs, redirect } from "react-router-dom";

function AuthenticationPage() {
  return <AuthForm />;
}

export const Action = async ({ request }: ActionFunctionArgs) => {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    throw {
      message: "Invalid authentication mode.",
      status: 422,
    } as CustomErrorObject;
  }

  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch(`http://localhost:8080/${mode}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  const resData = await response.json();

  if (response.status === 422 || response.status === 401) return response;

  if (!response.ok) {
    throw {
      message: "Authentication failed.",
      status: 500,
    } as CustomErrorObject;
  }

  const token = resData.token;
  localStorage.setItem("token", token);
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem("expiration", expiration.toISOString());

  return redirect("/");
};

export default AuthenticationPage;
