
import React, { useState } from 'react';
import ColourSelector from './ColourSelector';
import Selection from './Selection';

const App = () => {
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <h1>Color Selector</h1>
      <ColourSelector onColorSelect={handleColorChange} />
      <div className="selection-container">
        <Selection color={selectedColor} />
        <Selection color={selectedColor} />
        <Selection color={selectedColor} />
      </div>
    </div>
  );
};

export default App;
