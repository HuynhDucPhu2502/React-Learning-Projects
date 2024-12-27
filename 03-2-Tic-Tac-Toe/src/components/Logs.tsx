type Turn = {
  square: { rowIndex: number; colIndex: number };
  player: string;
};

type Props = {
  turns: Turn[];
};

const Logs: React.FC<Props> = ({ turns }) => {
  return (
    <ol id="log">
      {turns.map((turn) => {
        return (
          <li key={`${turn.square.rowIndex}${turn.square.colIndex}`}>
            {turn.player} selected {turn.square.rowIndex},{turn.square.colIndex}
          </li>
        );
      })}
    </ol>
  );
};

export default Logs;
