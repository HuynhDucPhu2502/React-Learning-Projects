import { CORE_CONCEPTS } from "../data";
import CoreConceptItem from "./CoreConceptItem";
import Section from "./Section";

const CoreConcept = () => {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((value) => (
          <CoreConceptItem {...value} key={value.title}></CoreConceptItem>
        ))}
      </ul>
    </Section>
  );
};

export default CoreConcept;
