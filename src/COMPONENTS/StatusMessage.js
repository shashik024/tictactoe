import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const isBoardFilled = current.board.every(el => el != null);
  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !isBoardFilled && (
        <>
          Next Player is{' '}
          <span className={current.isNextx ? 'text-green' : 'text-orange'}>
            {current.isNextx ? 'X' : 'O'}{' '}
          </span>
        </>
      )}
      {!winner && isBoardFilled && (
        <>
          <span className="text-green">X</span> and{' '}
          <span className="text-orange">O</span> tied
        </>
      )}
    </div>
  );
};

export default StatusMessage;
