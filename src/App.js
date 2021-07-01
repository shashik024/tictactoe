import React, { useState } from 'react';
import Board from './COMPONENTS/Board';
import './Styles/root.scss';
import calculateWinner from './helper';

const App = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isNextx: true },
  ]);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  const winner = calculateWinner(current.board);

  const message = winner
    ? `The Winner is ${winner}`
    : `The Next Player is ${current.isNextx ? 'X' : 'O'}`;
  //  console.log("Borad  mount");

  const handelSquareValue = position => {
    if (current.board[position] || winner) {
      return;
    }

    setHistory(prevState => {
      const last = prevState[prevState.length - 1];

      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isNextx ? 'X' : 'O';
        }
        return square;
      });

      return prevState.concat({ board: newBoard, isNextx: !last.isNextx });
    });
    setCurrentMove(prevState => prevState + 1);
  };
  return (
    <div className="app">
      <h1>Tic Tac Toe ;D</h1>
      <h2>{message}</h2>
      <Board board={current.board} handelSquareValue={handelSquareValue} />
    </div>
  );
};
export default App;
