import React from 'react';
import Square from './Square';

const Board = ({ board, handelSquareValue, winingSequence }) => {
  const renderSquare = position => {
    const isWiningSequence = winingSequence.includes(position);
    return (
      <Square
        isWiningSequence={isWiningSequence}
        value={board[position]}
        onClick={() => {
          handelSquareValue(position);
        }}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row ">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row ">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row ">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;

// useState get initial state as argument

// const [board, setBoard] = useState(Array(9).fill(null));
// const [isNextx, setisNextx] = useState(true);

// console.log(board);

// const handelSquareValue = position => {
//   if (board[position]) {
//     return;
//   }
//   setBoard(prevState => {
//     return prevState.map((square, pos) => {
//       if (pos == position) {
//         return isNextx ? 'X' : 'O';
//       }
//       return square;
//     });
//   });
//   // setBoard(5);
//   setisNextx(prevState => !prevState);
// };

// const renderSquare = position => {
//   return (
//     <Square
//       value={board[position]}
//       onClick={() => {
//         handelSquareValue(position);
//       }}
//     />
//   );
// };
