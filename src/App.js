import React from 'react';
import Board from './COMPONENTS/Board';
import './Styles/root.scss';

const App = () => {
  return (
    <div className="app">
      <h1>Tic Tac Toe ;D</h1>
      <Board />
    </div>
  );
};
export default App;
