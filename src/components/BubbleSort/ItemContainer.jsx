import React from 'react';
import PropTypes from 'prop-types';
import Item from '../shared/Item';

const ItemContainer = ({items, position, x, y, iterator}) => {
  const getPosition = index => position.findIndex(e => e === index);
  const isActive = index => index === position[x] || index === position[y];

  return (
    <div className="item-container">
      {items.map((item, index) => (
        <Item
          key={item}
          value={item}
          active={isActive(index)}
          visited={getPosition(index) >= iterator}
          index={getPosition(index)}
        />
      ))}
    </div>
  );
};

ItemContainer.propTypes = {
  items: PropTypes.array.isRequired,
  position: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  iterator: PropTypes.number.isRequired,
};

export default ItemContainer;
