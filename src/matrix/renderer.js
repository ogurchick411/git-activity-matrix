import chalk from 'chalk';
import { getBlockByTheme } from './themes.js';

export function renderMatrix(matrix, themeName = 'github') {
    
  const dayLabels = ['Sun ', 'Mon ', 'Tue ', 'Wed ', 'Thu ', 'Fri ', 'Sat '];
  const output = [];

  for (let row = 0; row < 7; row++) {
    const label = chalk.gray(dayLabels[row]);
    const cells = matrix[row].map(cell => {
      if (!cell) {
        return ' ';
      }
      return getBlockByTheme(cell.count, themeName);
    });

    output.push(`${label} ${cells.join(' ')}`);
  }

  console.log('\n' + output.join('\n') + '\n');
}