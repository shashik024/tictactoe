import React, { useState } from 'react';
import Board from './COMPONENTS/Board';
import './Styles/root.scss';
import calculateWinner from './helper';
import History from './COMPONENTS/History';
import StatusMessage from './COMPONENTS/StatusMessage';

const NEW_GAME = [{ board: Array(9).fill(null), isNextx: true }];
const App = () => {
  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];
  console.log(current.board);

  const { winner, winingSequence } = calculateWinner(current.board);

  const handelSquareValue = position => {
    if (current.board[position] || winner) {
      return;
    }

    setHistory(prevState => {
      const last = prevState[prevState.length - 1];
      // console.log(last);

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

  const setNewGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };
  const moveTo = move => {
    setCurrentMove(move);
  };
  return (
    <div className="app">
      <h1>
        Tic <span className="text-green">Tac</span> Toe ;D
      </h1>
      <StatusMessage winner={winner} current={current} />
      <Board
        board={current.board}
        handelSquareValue={handelSquareValue}
        winingSequence={winingSequence}
      />
      <button
        type="button"
        onClick={setNewGame}
        className={`btn-reset ${winner ? 'active' : ' '}`}
      >
        New Game
      </button>
      <h2
        style={{
          fontWeight: 'normal',
        }}
      >
        Current Game History
      </h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
      <div className="bg-balls" />
    </div>
  );
};
export default App;
