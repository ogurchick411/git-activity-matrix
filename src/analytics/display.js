import chalk from 'chalk';

export function renderStats(stats) {
  console.log(chalk.bold.cyan('--- COMMIT STATISTICS ---'));
  console.log(`${chalk.gray('Total Commits:')}  ${chalk.green.bold(stats.totalCommits)}`);
  console.log(`${chalk.gray('Current Streak:')} ${chalk.yellow.bold(stats.currentStreak)} days`);
  console.log(`${chalk.gray('Longest Streak:')} ${chalk.magenta.bold(stats.longestStreak)} days\n`);
}