import './styles.css';
import React, { useState } from 'react';


function Grid() {
<<<<<<< HEAD
  const [selectedColor, setSelectedColor] = useState('#ffffff');
=======
  const [selectedColor, setSelectedColor] = useState('#000000');
>>>>>>> main
  const [grid, setGrid] = useState([[selectedColor]]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const addRow = () => {
<<<<<<< HEAD
    setGrid((prevGrid) => [...prevGrid, Array(prevGrid[0].length).fill('#ffffff')]);
=======
    setGrid((prevGrid) => [...prevGrid, Array(prevGrid[0].length).fill(selectedColor)]);
>>>>>>> main
  };

  const removeRow = () => {
    if (grid.length > 1) {
      setGrid((prevGrid) => prevGrid.slice(0, -1));
    }
  };

  const addColumn = () => {
    setGrid((prevGrid) =>
      prevGrid.map((row) => {
<<<<<<< HEAD
        return [...row, '#ffffff'];
=======
        return [...row, selectedColor];
>>>>>>> main
      })
    );
  };

  const removeColumn = () => {
    if (grid[0].length > 1) {
      setGrid((prevGrid) =>
        prevGrid.map((row) => {
          return row.slice(0, -1);
        })
      );
    }
  };

  return (
    <div>
      <div>
        Selected Color:
        <input
          type="color"
          value={selectedColor}
          onChange={(e) => handleColorChange(e.target.value)}
        />
      </div>
      <button onClick={addRow}>Add Row</button>
      <button onClick={removeRow}>Remove Row</button>
      <button onClick={addColumn}>Add Column</button>
      <button onClick={removeColumn}>Remove Column</button>
      
      <table>
        <tbody>
          {grid.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cellColor, cellIndex) => (
                <Cell
                  key={cellIndex}
                  color={cellColor}
                  onClick={() => {
                    const updatedGrid = [...grid];
                    updatedGrid[rowIndex][cellIndex] = selectedColor;
                    setGrid(updatedGrid);
                  }}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}




function Cell({ color, onClick }) {
  return (
    <td
      className="cell"
      style={{ backgroundColor: color }}
      onClick={onClick}
    ></td>
  );
}

function App() {
  return (
    <div className="App">
      <Grid />
    </div>
  );
}

export default App;
