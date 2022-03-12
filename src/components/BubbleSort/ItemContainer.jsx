import React from 'react';
import PropTypes from 'prop-types';
import Item from '../shared/Item';

const ItemContainer = ({ items, position }) => {
  const getPosition = (index) => position.findIndex((e) => e === index);

  return (
    <div className='item-container'>
      {items.map((item, index) => (
        <Item key={item} value={item} index={getPosition(index)} />
      ))}
    </div>
  );
};

ItemContainer.propTypes = {
  items: PropTypes.array.isRequired,
  position: PropTypes.number.isRequired
};

export default ItemContainer;
