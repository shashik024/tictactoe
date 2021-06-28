import React from 'react';

const Square = props => {

  // console.log('Square /Mount');

  return (
    <button type="button" className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Square;
