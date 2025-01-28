import { redirect } from "react-router-dom";

export const getAuthToken = (): string | null => {
  const token = localStorage.getItem("token");

  if (!token) return null;

  const tokenDuration = getTokenDuration();

  if (tokenDuration < 0) {
    return "EXPIRED";
  }

  return token;
};

export const clearAuthToken = () => {
  localStorage.removeItem("token");
};

export const tokenLoader = () => {
  return getAuthToken();
};

export const checkAuthLoader = () => {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth?mode=login");
  }

  return token;
};

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem("expiration");
  if (!storedExpirationDate) return 0;

  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}
