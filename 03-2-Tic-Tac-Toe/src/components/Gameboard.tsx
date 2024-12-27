type Cell = string | null;
type GameboardType = Cell[][];

type Props = {
  handleTurn: (rowIndex: number, colIndex: number) => void;
  gameboard: GameboardType;
};

const Gameboard: React.FC<Props> = ({ handleTurn, gameboard }) => {
  return (
    <ol id="game-board">
      {gameboard.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => {
                return (
                  <li key={colIndex}>
                    <button
                      onClick={() => handleTurn(rowIndex, colIndex)}
                      disabled={playerSymbol !== null}
                    >
                      {playerSymbol}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
};

export default Gameboard;
