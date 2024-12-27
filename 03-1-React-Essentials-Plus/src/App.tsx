import "./App.css";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcept></CoreConcept>
        <TabButton></TabButton>
      </main>
    </>
  );
}

export default App;
