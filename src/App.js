

import React, { useState } from "react";

const Square = ({ x, y, size, onClick }) => {
  const style = {
    position: "absolute",
    left: `${x}px`,
    top: `${y}px`,
    width: `${size}px`,
    height: `${size}px`,
    border: "1px solid black",
  };

  return <div style={style} onClick={onClick}></div>;
};

const Grid = ({ size, squareSize }) => {
  const [selected, setSelected] = useState(null);

  const squares = [];
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      squares.push(
        <Square
          key={`${i}-${j}`}
          x={i * squareSize}
          y={j * squareSize}
          size={squareSize}
          onClick={() => setSelected([i, j])}
        />
      );
    }
  }

  return (
    <div style={{ position: "relative" }}>
      {squares}
      {selected && (
        <div
          style={{
            position: "absolute",
            left: `${selected[0] * squareSize}px`,
            top: `${selected[1] * squareSize}px`,
            width: `${squareSize}px`,
            height: `${squareSize}px`,
            backgroundColor: "rgba(255, 0, 0, 0.5)",
          }}
        >
          {`${selected[0]}, ${selected[1]}`}
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [squareSize, setSquareSize] = useState(3);

  return (
    <div>
      <label>
        Enter the dimension of the smaller square:
        <input
          type="number"
          value={squareSize}
          onChange={(e) => setSquareSize(parseInt(e.target.value))}
        />
      </label>
      <Grid size={9} squareSize={100 / squareSize} />
    </div>
  );
};

export default App;