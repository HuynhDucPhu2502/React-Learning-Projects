import logoImg from "./assets/logo.png";
import { useRef, useState, useCallback, useEffect } from "react";
import Place from "./types/Place";
import Places from "./components/Places";
import AvailablePlaces from "./components/AvailablePlaces";
import Modal from "./components/Modal";
import DeleteConfirmation from "./components/DeleteConfirmation";
import { updateUserPlaces, fetchUserPlaces } from "./Http";
import ErrorBox from "./components/ErrorBox";
import { sortPlacesByDistance } from "./loc";

function App() {
  const selectedPlace = useRef<Place>();
  const [userPlaces, setUserPlaces] = useState<Place[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleStartRemovePlace = (place: Place) => {
    setModalIsOpen(true);
    selectedPlace.current = place;
  };

  const handleStopRemovePlace = () => {
    setModalIsOpen(false);
  };

  const handleSelectPlace = async (selectedPlace: Place) => {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    try {
      await updateUserPlaces([selectedPlace, ...userPlaces]);
    } catch (error) {
      if (error instanceof Error) setErrorUpdatingPlaces(error.message);
      setUserPlaces(userPlaces);
    }
  };

  const handleRemovePlace = useCallback(async () => {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current?.id)
    );

    try {
      await updateUserPlaces(
        userPlaces.filter((place) => place.id !== selectedPlace.current?.id)
      );
    } catch (error) {
      if (error instanceof Error) setErrorUpdatingPlaces(error.message);
      setUserPlaces(userPlaces);
    }

    setModalIsOpen(false);
  }, [userPlaces]);

  useEffect(() => {
    const handleFetchUserPlaces = async () => {
      setIsLoading(true);

      try {
        const resData: Place[] = await fetchUserPlaces();

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            resData,
            position.coords.latitude,
            position.coords.longitude
          );
          setUserPlaces(sortedPlaces);
          setIsLoading(false);
        });
      } catch (error) {
        if (error instanceof Error) setError(error.message);
        else setError("Failed to fetch available places");
      }
    };

    handleFetchUserPlaces();
  }, []);

  const handleError = () => {
    setErrorUpdatingPlaces("");
  };

  return (
    <>
      <Modal open={errorUpdatingPlaces !== ""} onClose={handleError}>
        {errorUpdatingPlaces && (
          <ErrorBox title="Error" message={errorUpdatingPlaces} />
        )}
      </Modal>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        {error && <ErrorBox title="Error" message={error} />}
        <Places
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}
          isLoading={isLoading}
          fetchingText="Fetching user places..."
        />

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
