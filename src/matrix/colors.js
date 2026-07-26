import chalk from 'chalk';

export function getColoredBlock(count) {
  if (count === 0) {
    return chalk.hex('#2d333b')('■');
  }
  if (count <= 2) {
    return chalk.hex('#0e4429')('■');
  }
  if (count <= 5) {
    return chalk.hex('#006d32')('■');
  }
  if (count <= 9) {
    return chalk.hex('#26a641')('■');
  }
  return chalk.hex('#39d353')('■');
}