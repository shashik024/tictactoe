import React from 'react';
import Square from './Square';
function Board() {
  return (
    <div className="board">
      <div className="board-row ">
        <Square value={0} />
        <Square value={2} />
        <Square value={3} />
      </div>
      <div className="board-row ">
        <Square value={0} />
        <Square value={0} />
        <Square value={0} />
      </div>
      <div className="board-row ">
        <Square value={0} />
        <Square value={0} />
        <Square value={0} />
      </div>
    </div>
  );
}

export default Board;
