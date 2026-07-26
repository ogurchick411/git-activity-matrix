import chalk from 'chalk';

export function renderStats(stats, peakData) {
  console.log(chalk.bold.cyan('--- COMMIT STATISTICS ---'));
  console.log(`${chalk.gray('Total Commits:')}  ${chalk.green.bold(stats.totalCommits)}`);
  console.log(`${chalk.gray('Current Streak:')} ${chalk.yellow.bold(stats.currentStreak)} days`);
  console.log(`${chalk.gray('Longest Streak:')} ${chalk.magenta.bold(stats.longestStreak)} days`);

  if (peakData && peakData.maxCount > 0) {
    const formattedHour = `${String(peakData.peakHour).padStart(2, '0')}:00`;
    console.log(`${chalk.gray('Peak Productivity:')} ${chalk.blue.bold(formattedHour)} (${peakData.maxCount} commits)`);
  }
  console.log('');
}