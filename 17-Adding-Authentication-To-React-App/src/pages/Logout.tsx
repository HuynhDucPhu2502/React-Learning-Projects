import { redirect } from "react-router-dom";
import { clearAuthToken } from "../utils/auth";

export const Action = () => {
  clearAuthToken();
  return redirect("/");
};
