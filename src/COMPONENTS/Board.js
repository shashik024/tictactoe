import React from 'react';
import Square from './Square';
function Board() {
  return (
    <div>
      <div>
        <Square value={0} />
        <Square value={2} />
        <Square value={3} />
      </div>
      <div>
        <Square value={0} />
        <Square value={0} />
        <Square value={0} />
      </div>
      <div>
        <Square value={0} />
        <Square value={0} />
        <Square value={0} />
      </div>
    </div>
  );
}

export default Board;
