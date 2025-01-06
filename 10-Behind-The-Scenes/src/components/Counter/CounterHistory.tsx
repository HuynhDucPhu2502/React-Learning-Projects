import React, { useState } from "react";

import { log } from "../../log.js";

type CounterHistoryType = {
  value: number;
  id: number;
};

type Props = {
  history: CounterHistoryType[];
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
      {history.map((history) => (
        <HistoryItem key={history.id} count={history.value} />
      ))}
    </ol>
  );
};

export default CounterHistory;
