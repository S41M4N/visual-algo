import React from 'react';

const itemWidth = 50;
const itemMargin = 3;

const Item = ({ value, index }) => {
  const style = {
    height: value + '%',
    width: '50px',
    background: '#999',
    left: index * (itemWidth + itemMargin) + 'px',
  };
  return (
    <div className='item' style={style}>
      {value}
    </div>
  );
};

export default Item;
