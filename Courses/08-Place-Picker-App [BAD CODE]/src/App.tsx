import logoImg from "./assets/logo.png";
import { PlaceContextProvider } from "./store/picked-places-context";
import PlacesList from "./components/PlacesList";
import { AVAILABLE_PLACES } from "./data";

function App() {
  return (
    <PlaceContextProvider>
      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <PlacesList
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
        />
        <PlacesList
          title="Available Places"
          fallbackText={null}
          places={AVAILABLE_PLACES}
        />
      </main>
    </PlaceContextProvider>
  );
}

export default App;
