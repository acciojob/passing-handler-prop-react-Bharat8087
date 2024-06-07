

import React from 'react';

const ColourSelector = ({ onColorSelect }) => {
  const colors = ['red', 'green', 'blue', 'orange'];

  return (
    <div>
      {colors.map((color) => (
        <button
          key={color}
          style={{ backgroundColor: color, color: 'white', margin: '5px' }}
          onClick={() => onColorSelect(color)}
          data-testid={color} // Adding data-testid attribute
        >
          {color}
        </button>
      ))}
    </div>
  );
};

export default ColourSelector;
