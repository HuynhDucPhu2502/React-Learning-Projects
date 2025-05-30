import Place from "./types/Place";

export const fetchAvailablePlaces = async (): Promise<Place[]> => {
  const res = await fetch("http://localhost:3000/places");

  if (!res.ok) throw new Error("Failed to fetch available places");

  const resData: { places: Place[] } = await res.json();
  return resData.places;
};

export const updateUserPlaces = async (places: Place[]) => {
  const res = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ places: places }),
  });
  const resData: { message: string } = await res.json();
  return resData.message;
};

export const fetchUserPlaces = async (): Promise<Place[]> => {
  const res = await fetch("http://localhost:3000/user-places");

  if (!res.ok) throw new Error("Failed to fetch user places");

  const resData: { places: Place[] } = await res.json();
  return resData.places;
};
