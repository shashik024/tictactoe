import React, { useState } from 'react';
import Board from './COMPONENTS/Board';
import './Styles/root.scss';
import calculateWinner from './helper';
import History from './COMPONENTS/History';
import StatusMessage from './COMPONENTS/StatusMessage';

const App = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isNextx: true },
  ]);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];
  console.log(current);

  const winner = calculateWinner(current.board);

  const handelSquareValue = position => {
    if (current.board[position] || winner) {
      return;
    }

    setHistory(prevState => {
      const last = prevState[prevState.length - 1];
      console.log(last);

      const newBoard = last.board.map((square, pos) => {
        // console.log(square);
        // console.log(pos);
        // console.log(position);

        if (pos === position) {
          return last.isNextx ? 'X' : 'O';
        }
        return square;
      });

      return prevState.concat({ board: newBoard, isNextx: !last.isNextx });
    });
    setCurrentMove(prevState => prevState + 1);
  };

  const moveTo = move => {
    setCurrentMove(move);
  };
  return (
    <div className="app">
      <h1>Tic Tac Toe ;D</h1>
      <StatusMessage winner={winner} current={current} />
      <Board board={current.board} handelSquareValue={handelSquareValue} />
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};
export default App;
