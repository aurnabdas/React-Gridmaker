import './styles.css';
import React, { useState } from 'react';

function Grid() {
  const [selectedColor, setSelectedColor] = useState('#ffffff');
  const [grid, setGrid] = useState([[selectedColor]]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const addRow = () => {
    const updatedGrid = [...grid];

    setGrid([...grid, Array(updatedGrid[0].length).fill('#ffffff')]);
  };

  const removeRow = () => {
    const updatedGrid = [...grid];
    if (grid.length > 1) {
      setGrid(updatedGrid.slice(0, -1));
    }
  };

  const addColumn = () => {
    const updatedGrid = [...grid];
    setGrid(
      updatedGrid.map((row) => {
        return [...row, '#ffffff'];
      })
    );
  };

  const removeColumn = () => {
    const updatedGrid = [...grid];
    if (grid[0].length > 1) {
      setGrid(
        updatedGrid.map((row) => {
          return row.slice(0, -1);
        })
      );
    }
  };

  const updateColoredCells = () => {
    const updatedGrid = [...grid];
    for (let i = 0; i < updatedGrid.length; i++) {
      for (let j = 0; j < updatedGrid[i].length; j++) {
        if (updatedGrid[i][j] !== '#ffffff') {
          updatedGrid[i][j] = selectedColor;
        }
      }
    }
    setGrid(updatedGrid);
  };

  const removeColor = () => {
    const updatedGrid = [...grid];
    for (let i = 0; i < updatedGrid.length; i++) {
      for (let j = 0; j < updatedGrid[i].length; j++) {
        if (updatedGrid[i][j] !== '#ffffff') {
          updatedGrid[i][j] = '#ffffff';
        }
      }
    }

    setGrid(updatedGrid);
  };

  const updateUncoloredCells = () => {
    const updatedGrid = [...grid];
    for (let i = 0; i < updatedGrid.length; i++) {
      for (let j = 0; j < updatedGrid[i].length; j++) {
        if (updatedGrid[i][j] === '#ffffff') {
          updatedGrid[i][j] = selectedColor;
        }
      }
    }
    setGrid(updatedGrid);
  };

  return (
    <div className="container">
      <div className="color-selector-container">
        <span className="color-selector-label">SELECT A COLOR HERE:</span>
        <input
          type="color"
          className="color-selector-input"
          value={selectedColor}
          onChange={(e) => handleColorChange(e.target.value)}
        />
      </div>
      <div className="button-container">
        <button onClick={addRow}>Add Row</button>
        <button onClick={removeRow}>Remove Row</button>
        <button onClick={addColumn}>Add Column</button>
        <button onClick={removeColumn}>Remove Column</button>
        <button onClick={updateColoredCells}>Update Colored Cells</button>
        <button onClick={updateUncoloredCells}>Update Uncolored Cells</button>
        <button onClick={removeColor}>Remove Color</button>
      </div>
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
