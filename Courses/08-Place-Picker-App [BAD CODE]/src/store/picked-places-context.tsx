import React, { createContext, useReducer } from "react";
import { Place } from "../types/Place";
import { AVAILABLE_PLACES } from "../data";

type PlaceContextType = {
  selectedPlaces: Place[];
  handleAddPlace: (placeId: string) => void;
  handleRemovePlace: (placeId: string) => void;
};

const PlaceContext = createContext<PlaceContextType>({
  selectedPlaces: [],
  handleAddPlace: () => {},
  handleRemovePlace: () => {},
});

type PlacesAction =
  | { type: "SELECT_PLACE"; payload: { placeId: string } }
  | { type: "REMOVE_PLACE"; payload: { placeId: string } };

const PlaceContextReducer = (state: Place[], action: PlacesAction): Place[] => {
  switch (action.type) {
    case "SELECT_PLACE": {
      console.log("test 5");
      if (!state.some((x) => x.id === action.payload.placeId)) {
        const newPlace: Place | undefined = AVAILABLE_PLACES.find(
          (x: Place) => x.id === action.payload.placeId
        );
        if (newPlace) return [...state, newPlace];
      }

      return state;
    }

    case "REMOVE_PLACE": {
      return state.filter((x) => x.id !== action.payload.placeId);
    }

    default:
      return state;
  }
};

export const PlaceContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedPlaces, dispatch] = useReducer(PlaceContextReducer, []);

  const handleAddPlace = (placeId: string) => {
    dispatch({ type: "SELECT_PLACE", payload: { placeId: placeId } });
  };

  const handleRemovePlace = (placeId: string) => {
    dispatch({ type: "REMOVE_PLACE", payload: { placeId: placeId } });
  };

  return (
    <PlaceContext.Provider
      value={{
        selectedPlaces,
        handleAddPlace,
        handleRemovePlace,
      }}
    >
      {children}
    </PlaceContext.Provider>
  );
};

export default PlaceContext;
