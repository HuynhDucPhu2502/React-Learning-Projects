import { useState } from "react";

type Props = {
  initialPlayerName: string;
  playerSymbol: string;
  isActive: boolean;
  handleUpdatePlayerName: (playerName: string, playerSymbol: string) => void;
};

const Player: React.FC<Props> = ({
  initialPlayerName,
  playerSymbol,
  isActive,
  handleUpdatePlayerName,
}) => {
  const [isEditting, setIsEditting] = useState(false);
  const [playerNameInput, setPlayerNameInput] =
    useState<string>(initialPlayerName);

  const handleOnSave = () => {
    if (!playerNameInput) {
      alert("Please enter player name");
      return;
    }
    setIsEditting((value) => !value);

    handleUpdatePlayerName(playerNameInput, playerSymbol);
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditting ? (
          <input
            type="text"
            onChange={(e) => setPlayerNameInput(e.target.value)}
            value={playerNameInput}
            required
          />
        ) : (
          <span className="player-name">{playerNameInput}</span>
        )}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      {isEditting ? (
        <button onClick={() => handleOnSave()}>Save</button>
      ) : (
        <button onClick={() => setIsEditting((value) => !value)}>Edit</button>
      )}
    </li>
  );
};

export default Player;
