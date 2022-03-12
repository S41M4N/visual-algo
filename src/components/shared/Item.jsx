import React from 'react';
import PropTypes from 'prop-types';

const itemWidth = 50;
const itemMargin = 3;

const Item = ({ value, index }) => {
  const style = {
    height: `${value  }%`,
    width: '50px',
    background: '#999',
    left: `${index * (itemWidth + itemMargin)  }px`,
  };
  return (
    <div className='item' style={style}>
      {value}
    </div>
  );
};

Item.propTypes = {
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired
};

export default Item;
