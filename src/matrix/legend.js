import chalk from 'chalk';

export function renderLegend() {
  const c0 = chalk.hex('#2d333b')('■');
  const c1 = chalk.hex('#0e4429')('■');
  const c2 = chalk.hex('#006d32')('■');
  const c3 = chalk.hex('#26a641')('■');
  const c4 = chalk.hex('#39d353')('■');

  console.log(`     Less ${c0} ${c1} ${c2} ${c3} ${c4} More\n`);
}