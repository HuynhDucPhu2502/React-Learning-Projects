import Places from "./Places.tsx";
import Place from "../types/Place.js";
import { useEffect, useState } from "react";

type Props = {
  onSelectPlace: (selectedPlace: Place) => void;
};

const AvailablePlaces: React.FC<Props> = ({ onSelectPlace }) => {
  const [availablePlaces, setAvailablePlaces] = useState<Place[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/places")
      .then((resJson) => resJson.json())
      .then((resData: { places: Place[] }) => {
        setAvailablePlaces(resData.places);
      });
  }, [availablePlaces]);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
};

export default AvailablePlaces;
