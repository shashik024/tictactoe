import React, {useState} from 'react';
import Board from './COMPONENTS/Board';
import './Styles/root.scss';
import calculateWinner from './helper'

const App = () => {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isNextx, setNextx] = useState(true);

  const winner = calculateWinner(board)

  const message = winner ? `The Winner is ${winner}` : `The Next Player is ${isNextx ? "X" : "O"}`
  //  console.log("Borad  mount");


  const handelSquareValue = position => {
    if (board[position] || winner ) {
      return;
    }


    setBoard(prevState => {
      return prevState.map((square, pos) => {
        if (pos === position) {
          return isNextx ? 'X' : 'O';
        }
        return square;
      });
    });

    setNextx(preState => !preState);
  };
  return (
    <div className="app">
      <h1>Tic Tac Toe ;D</h1>
      <h2>{message}</h2>
      <Board  board={board} handelSquareValue={handelSquareValue} />
    </div>
  );
};
export default App;
