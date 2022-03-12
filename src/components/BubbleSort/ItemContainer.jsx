import React from 'react';
import Item from '../shared/Item';

const ItemContainer = ({ items, position }) => {
  const getPosition = (index) => {
    return position.findIndex((e) => e === index);
  };

  return (
    <div className='item-container'>
      {items.map((item, index) => (
        <Item key={item} value={item} index={getPosition(index)} />
      ))}
    </div>
  );
};

export default ItemContainer;
