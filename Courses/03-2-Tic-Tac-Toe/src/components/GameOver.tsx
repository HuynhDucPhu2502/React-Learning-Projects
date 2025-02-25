type Props = {
  winner: string | null;
  handleRematch: () => void;
};
const GameOver: React.FC<Props> = ({ winner, handleRematch }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's a draw!</p>}
      <p>
        <button onClick={handleRematch}>Rematch!</button>
      </p>
    </div>
  );
};

export default GameOver;
