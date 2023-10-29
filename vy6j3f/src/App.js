import './styles.css';
import React, { useState } from 'react';


function Grid() {
  const [selectedColor, setSelectedColor] = useState('#ffffff');
  const [grid, setGrid] = useState([[selectedColor]]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  // you use a copy of the grid, so it doesnt affect the rendering
  // when using setGrid you want to return a 2d array: [[],[]]. that is why everything is within the []
  //...grid will return the array inside: ['white], you are combining this with another array of of cells which are all set to white background. this array is a copy of the first row in the table
  // the reason why you use the first row is because you wil; always have at least the first row, and you need it to mimic the amount of columns you will neeed to add to the grid
  const addRow = () => {
    const updatedGrid = [...grid];

    setGrid([...grid, Array(updatedGrid[0].length).fill('#ffffff')]);
    
  };

  //removing involves slicing out the the last array from the grid of arrays
  const removeRow = () => {
    const updatedGrid = [...grid];
    if (grid.length > 1) {
      setGrid(updatedGrid.slice(0, -1));
    }
  };

  // by using the .map function, its similar to making a for loop you can access each row value and add the the color value, the index of this value repersents the column 
  // example [[blue]] --(add a column)--> [[blue,white]]
  const addColumn = () => {
    const updatedGrid = [...grid];
    setGrid( 
      updatedGrid.map((row) => {
        return [...row, '#ffffff'];
      })
    );
  };
  // you access the the column by using .map on the copy of the current grid, just like how we did in addColumn
  // you slice the last value within each row array
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

  return (
    <div>
      <div>
        Current Color:
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
