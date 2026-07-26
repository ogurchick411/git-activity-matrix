import chalk from 'chalk';

const themes = {
  github: ['#2d333b', '#0e4429', '#006d32', '#26a641', '#39d353'],
  cyberpunk: ['#22223b', '#4a4e69', '#9a8c98', '#c9ada7', '#f2e9e4'],
  monokai: ['#272822', '#75715e', '#a6e22e', '#e6db74', '#fd971f']
};

export function getBlockByTheme(count, themeName = 'github') {
  const palette = themes[themeName] || themes.github;

  if (count === 0) return chalk.hex(palette[0])('■');
  if (count <= 2) return chalk.hex(palette[1])('■');
  if (count <= 5) return chalk.hex(palette[2])('■');
  if (count <= 9) return chalk.hex(palette[3])('■');
  return chalk.hex(palette[4])('■');
}