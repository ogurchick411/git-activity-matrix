 const config = require('./config');
const { validateInput } = require('./validator');
const { formatActivityCell } = require('./formatter');

function generateActivityMatrix(data) {
  validateInput(data);
  
  let output = "";
  for (let w = 0; w < config.weeks; w++) {
    let weekRow = "";
    for (let d = 0; d < config.daysInWeek; d++) {
      const mockCount = Math.floor(Math.random() * 10);
      weekRow += formatActivityCell(mockCount, config.symbols) + " ";
    }
    output += weekRow.trim() + "\n";
  }
  return output;
}

console.log(generateActivityMatrix({}));