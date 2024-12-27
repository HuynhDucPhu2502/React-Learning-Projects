import "./App.css";
import Player from "./components/Player";
import Gameboard from "./components/Gameboard";
import Logs from "./components/Logs";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import { useState } from "react";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

type Turn = {
  square: { rowIndex: number; colIndex: number };
  player: string;
};

type Cell = string | null;
type GameboardType = Cell[][];

const initialGameboard: GameboardType = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const deriveActivePlayer = (turns: Turn[]) => {
  let currentPlayer = "X";
  if (turns.length > 0 && turns[0].player === "X") currentPlayer = "O";
  return currentPlayer;
};

const deriveGameboard = (turns: Turn[]) => {
  const gameboard = [...initialGameboard.map((innerArray) => [...innerArray])];

  for (const turn of turns) {
    const { rowIndex, colIndex } = turn.square;
    gameboard[rowIndex][colIndex] = turn.player;
  }

  return gameboard;
};

const deriveWinner = (
  players: { X: string; O: string },
  gameboard: GameboardType
) => {
  let winner: string | null = null;

  for (const winningCombination of WINNING_COMBINATIONS) {
    const firstSquare =
      gameboard[winningCombination[0].row][winningCombination[0].column];
    const secondSquare =
      gameboard[winningCombination[1].row][winningCombination[1].column];
    const thirdSquare =
      gameboard[winningCombination[2].row][winningCombination[2].column];

    if (
      firstSquare !== null &&
      firstSquare === secondSquare &&
      firstSquare === thirdSquare
    ) {
      if (firstSquare === "X") winner = players.X;
      else if (firstSquare === "O") winner = players.O;
    }
  }

  return winner;
};

function App() {
  const [turns, setTurns] = useState<Turn[]>([]);
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  const currentPlayer = deriveActivePlayer(turns);

  const gameboard = deriveGameboard(turns);

  const winner = deriveWinner(players, gameboard);
  const hasDrawn = turns.length === 9 && !winner;

  const handleTurn = (rowIndex: number, colIndex: number) => {
    if (winner || hasDrawn) return;
    setTurns((prevTurn) => {
      const currentPlayer = deriveActivePlayer(prevTurn);

      const updatedTurns = [
        { square: { rowIndex, colIndex }, player: currentPlayer },
        ...prevTurn,
      ];
      return updatedTurns;
    });
  };

  const handleRematch = () => {
    setTurns([]);
  };

  const handleUpdatePlayerName = (playerName: string, playerSymbol: string) => {
    if (playerName)
      setPlayers((prevPlayers) => ({
        ...prevPlayers,
        [playerSymbol]: playerName,
      }));
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialPlayerName={PLAYERS.X}
            playerSymbol="X"
            isActive={currentPlayer === "X"}
            handleUpdatePlayerName={handleUpdatePlayerName}
          ></Player>
          <Player
            initialPlayerName={PLAYERS.O}
            playerSymbol="O"
            isActive={currentPlayer === "O"}
            handleUpdatePlayerName={handleUpdatePlayerName}
          ></Player>
        </ol>
        {winner || hasDrawn ? (
          <GameOver winner={winner} handleRematch={handleRematch} />
        ) : (
          ""
        )}
        <Gameboard handleTurn={handleTurn} gameboard={gameboard}></Gameboard>
      </div>
      <Logs turns={turns}></Logs>
    </main>
  );
}

export default App;
