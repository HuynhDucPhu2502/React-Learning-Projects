import { EXAMPLES } from "../data";
import { useState } from "react";
import Section from "./Section";
import TabButtonItem from "./TabButtonItem";
import Tabs from "./Tabs";

const TabButton = () => {
  const [selectedTopic, setSelectedTopic] = useState<
    keyof typeof EXAMPLES | ""
  >("");

  const handleSelect = (selectedButton: keyof typeof EXAMPLES) => {
    setSelectedTopic(selectedButton);
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
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButtonItem
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButtonItem>
            <TabButtonItem
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButtonItem>
            <TabButtonItem
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButtonItem>
            <TabButtonItem
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButtonItem>
          </>
        }
        Wrapper="menu"
      >
        {tabContent}
      </Tabs>
    </Section>
  );
};

export default TabButton;
