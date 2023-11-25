import React, { useState } from "react";
import Square from "./Square";

const Bord = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXturn, setisXturn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const isWinner = checkWinner();

  const handalClick = (index) => {
    const copyState = [...state];
    copyState[index] = isXturn ? "X" : "0";
    setState(copyState);
    setisXturn(!isXturn);
  };

  const playAgain = () => {
    setState (Array(9).fill(null));
  }

  return (
    <div className="container">
      <h1>Tic Toc Toy</h1>

      {isWinner ? (
        <>{isWinner} won the game <button onClick={playAgain}>play_Again</button></>
      ) : (
        <>
        <h4> player {isXturn? "X" : "0"} please move</h4>
          <div className="row">
            <Square onClick={() => handalClick(0)} value={state[0]} />
            <Square onClick={() => handalClick(1)} value={state[1]} />
            <Square onClick={() => handalClick(2)} value={state[2]} />
          </div>
          <div className="row">
            <Square onClick={() => handalClick(3)} value={state[3]} />
            <Square onClick={() => handalClick(4)} value={state[4]} />
            <Square onClick={() => handalClick(5)} value={state[5]} />
          </div>
          <div className="row">
            <Square onClick={() => handalClick(6)} value={state[6]} />
            <Square onClick={() => handalClick(7)} value={state[7]} />
            <Square onClick={() => handalClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Bord;
