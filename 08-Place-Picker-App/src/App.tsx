import logoImg from "./assets/logo.png";
import { AVAILABLE_PLACES } from "./data";
import PlaceList from "./components/PlaceList";
import { Place } from "./types/Place";
import { useRef, useState } from "react";
import Modal from "./components/Modal";
import DeleteConfirmation from "./components/DeleteConfirmation";

type ModalRef = {
  open: () => void;
  close: () => void;
};

function App() {
  const [pickedPlaces, setPickedPlaces] = useState<Place[]>([]);
  const modalRef = useRef<ModalRef>(null);
  const selectedPlace = useRef<string>();

  const handleStartRemovePlace = (id: string) => {
    modalRef.current?.open();
    selectedPlace.current = id;
  };

  const handleStopRemovePlace = () => {
    modalRef.current?.close();
  };

  const handleSelectPlace = (id: string) => {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      if (!place) return prevPickedPlaces;
      return [place, ...prevPickedPlaces];
    });
  };

  const handleRemovePlace = () => {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    modalRef.current?.close();
  };

  return (
    <>
      <Modal ref={modalRef}>
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
        <PlaceList
          title="I'd like to visit ..."
          fallBackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <PlaceList
          title="Available Places"
          places={AVAILABLE_PLACES}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
