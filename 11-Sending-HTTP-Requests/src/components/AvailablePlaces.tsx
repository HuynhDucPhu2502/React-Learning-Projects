import Places from "./Places.tsx";
import ErrorBox from "./ErrorBox.tsx";
import Place from "../types/Place.js";
import { useEffect, useState } from "react";
import { sortPlacesByDistance } from "../loc.ts";
import { fetchAvailablePlaces } from "../Http.ts";

type Props = {
  onSelectPlace: (selectedPlace: Place) => void;
};

const AvailablePlaces: React.FC<Props> = ({ onSelectPlace }) => {
  const [availablePlaces, setAvailablePlaces] = useState<Place[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleFetchAvailabelPlaces = async () => {
      setIsLoading(true);

      try {
        const resData: Place[] = await fetchAvailablePlaces();

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            resData,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlaces(sortedPlaces);
          setIsLoading(false);
        });
      } catch (error) {
        if (error instanceof Error) setError(error.message);
        else setError("Failed to fetch available places");
      }
    };

    handleFetchAvailabelPlaces();
  }, []);

  if (error) {
    return <ErrorBox title="Error" message={error} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
      isLoading={isLoading}
      fetchingText="Loading places..."
    />
  );
};

export default AvailablePlaces;
