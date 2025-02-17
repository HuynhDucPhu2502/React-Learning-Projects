import Place from "../types/Place";

type Props = {
  title: string;
  places: Place[];
  fallbackText: string;
  onSelectPlace: (selectedPlace: Place) => void;
  fetchingText?: string;
  isLoading?: boolean;
};

const Places: React.FC<Props> = ({
  title,
  places,
  fallbackText,
  onSelectPlace,
  fetchingText,
  isLoading,
}) => {
  return (
    <section className="places-category">
      <h2>{title}</h2>
      {isLoading && <p className="fallback-text">{fetchingText}</p>}
      {!isLoading && places.length === 0 && (
        <p className="fallback-text">{fallbackText}</p>
      )}
      {!isLoading && places.length > 0 && (
        <ul className="places">
          {places.map((place) => (
            <li key={place.id} className="place-item">
              <button onClick={() => onSelectPlace(place)}>
                <img
                  src={`http://localhost:3000/${place.image.src}`}
                  alt={place.image.alt}
                />
                <h3>{place.title}</h3>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Places;
