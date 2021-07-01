import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const isBoardFilled = current.board.every(el => el != null);
  return (
    <div>
      <h1>
        {winner && `Winner is ${winner}`}
        {!winner &&
          !isBoardFilled &&
          `Next Player is ${current.isNextx ? 'X' : 'O'}`}
        {!winner && isBoardFilled && `X and O Tied`}
      </h1>
    </div>
  );
};

export default StatusMessage;
