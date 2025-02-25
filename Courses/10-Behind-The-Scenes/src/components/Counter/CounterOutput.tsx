import { log } from "../../log";

type Props = {
  value: number;
};

const CounterOutput: React.FC<Props> = ({ value }) => {
  log("<CounterOutput /> rendered", 2);

  const cssClass = value >= 0 ? "counter-output" : "counter-output negative";
  return <span className={cssClass}>{value}</span>;
};

export default CounterOutput;
