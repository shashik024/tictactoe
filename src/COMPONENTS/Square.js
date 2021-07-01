import React from 'react';

const Square = props => {
  // console.log('Square /Mount');

  return (
    <button
      type="button"
      className={`square ${props.isWiningSequence ? 'winning' : ''} ${
        props.value === 'X' ? 'text-green' : 'text-orange'
      }`}
      onClick={props.onClick}
      style={{
        fontWeight: props.isWiningSequence ? 'bold' : 'normal',
      }}
    >
      {props.value}
    </button>
  );
};

export default Square;
