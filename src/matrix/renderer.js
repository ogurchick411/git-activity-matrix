import chalk from 'chalk';
import { getColoredBlock } from './colors.js';

export function renderMatrix(matrix) {
  const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const output = [];

  for (let row = 0; row < 7; row++) {
    const label = chalk.gray(dayLabels[row].padEnd(4, ' '));
    const cells = matrix[row].map(cell => {
      if (!cell) {
        return ' ';
      }
      return getColoredBlock(cell.count);
    });

    output.push(`${label}${cells.join(' ')}`);
  }

  console.log('\n' + output.join('\n') + '\n');
}