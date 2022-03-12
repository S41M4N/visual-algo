import React from 'react';
import PropTypes from 'prop-types';

const itemWidth = 50;
const itemMargin = 3;

const Item = ({ value, index, active, visited }) => {
  const getColor = () => {
    if(visited) return "#ff6a00";
    return active ? 'green': '#999';
  };
  const style = {
    height: `${value }%`,
    width: '50px',
    background: getColor(),
    left: `${index * (itemWidth + itemMargin) }px`,
  };
  return (
    <div className='item' style={style}>
      {value}
    </div>
  );
};

Item.propTypes = {
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  visited: PropTypes.bool.isRequired,
};

export default Item;
