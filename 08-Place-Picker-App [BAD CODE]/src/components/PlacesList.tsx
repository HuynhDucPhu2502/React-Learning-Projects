import { Place } from "../types/Place";
import PlaceContext from "../store/picked-places-context";
import { useContext, useRef, useState } from "react";
import Modal from "./Modal";

type Props = {
  title: string;
  places?: Place[];
  fallbackText: string | null;
};

type ModalAction = {
  open: () => void;
  close: () => void;
};

const PlacesList: React.FC<Props> = ({
  title,
  places,
  fallbackText = null,
}) => {
  const { handleAddPlace, selectedPlaces } = useContext(PlaceContext);

  const effectivePlaces = places || selectedPlaces;
  const modalRef = useRef<ModalAction>(null);
  const [pickedPlace, setPickedPlace] = useState<string>("");

  const onSelectPlace = (placeId: string) => {
    if (places) {
      handleAddPlace(placeId);
    } else {
      setPickedPlace(placeId);
      modalRef.current?.open();
    }
  };

  return (
    <>
      <Modal ref={modalRef} placeId={pickedPlace}></Modal>
      <section className="places-category">
        <h2>{title}</h2>
        {effectivePlaces.length === 0 && (
          <p className="fallback-text">{fallbackText}</p>
        )}
        {effectivePlaces.length > 0 && (
          <ul className="places">
            {effectivePlaces.map((place) => (
              <li key={place.id} className="place-item">
                <button onClick={() => onSelectPlace(place.id)}>
                  <img src={place.image.src} alt={place.image.alt} />
                  <h3>{place.title}</h3>
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
};

export default PlacesList;
