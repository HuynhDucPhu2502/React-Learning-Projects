import "./App.css";
import Header from "./components/Header";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import CoreConceptItem from "./components/CoreConceptItem";
import TabButtonItem from "./components/TabButtonItem";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState<
    keyof typeof EXAMPLES | ""
  >("");

  const handleSelect = (selectedButton: keyof typeof EXAMPLES) => {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  };

  const tabContent = selectedTopic ? (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  ) : (
    <p>Please select a topic</p>
  );

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h1 className="text-center font-bold text-5xl my-4">Core Concepts</h1>
          <ul>
            {CORE_CONCEPTS.map((value) => (
              <CoreConceptItem {...value} key={value.title}></CoreConceptItem>
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2 className="text-3xl">Examples</h2>
          <menu>
            <TabButtonItem
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButtonItem>
            <TabButtonItem
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButtonItem>
            <TabButtonItem
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButtonItem>
            <TabButtonItem
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButtonItem>
          </menu>
          {tabContent}
        </section>
      </main>
    </>
  );
}

export default App;
