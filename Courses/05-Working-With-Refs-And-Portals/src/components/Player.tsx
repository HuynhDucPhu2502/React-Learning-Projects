import { useRef, useState } from "react";

const Player = () => {
  const playerNameInputField = useRef<HTMLInputElement>(null);
  const [playerName, setPlayerName] = useState<string>("");

  const handleOnClick = () => {
    if (!playerNameInputField.current) return;
    setPlayerName(playerNameInputField.current.value);
    playerNameInputField.current.value = "";
  };

  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : "Unknow Entity"}</h2>
      <p>
        <input ref={playerNameInputField} />
        <button onClick={handleOnClick}>Set Name</button>
      </p>
    </section>
  );
};

export default Player;
