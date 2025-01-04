import React, { useState } from "react";

import { log } from "../../log.js";

type Props = {
  history: number[];
};

type HistoryItemProps = {
  count: number;
};

const HistoryItem: React.FC<HistoryItemProps> = ({ count }) => {
  log("<HistoryItem /> rendered", 3);

  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected((prevSelected) => !prevSelected);
  };

  return (
    <li onClick={handleClick} className={selected ? "selected" : undefined}>
      {count}
    </li>
  );
};

const CounterHistory: React.FC<Props> = ({ history }) => {
  log("<CounterHistory /> rendered", 2);

  return (
    <ol>
      {history.map((count, index) => (
        <HistoryItem key={index} count={count} />
      ))}
    </ol>
  );
};

export default CounterHistory;
