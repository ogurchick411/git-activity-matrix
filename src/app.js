import { execSync } from 'child_process';
import { parseArgs } from './cli/args.js';
import { findGitRepositories } from './git/scanner.js';
import { getCommitDates } from './git/commands.js';
import { aggregateCommitsByDate } from './utils/date.js';
import { buildYearMatrix } from './matrix/builder.js';
import { renderMatrix } from './matrix/renderer.js';
import { calculateStats } from './analytics/stats.js';
import { renderStats } from './analytics/display.js';

function checkGitAvailability() {
  try {
    execSync('git --version', { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

export function run() {
  if (!checkGitAvailability()) {
    console.error('Git is not installed or not available in PATH.');
    process.exit(1);
  }

  const args = parseArgs(process.argv.slice(2));
  const repos = findGitRepositories(args.path);

  if (repos.length === 0) {
    console.log('No Git repositories found in target path.');
    return;
  }

  let allDates = [];
  for (const repo of repos) {
    const dates = getCommitDates(repo, args.year);
    allDates = allDates.concat(dates);
  }

  const commitMap = aggregateCommitsByDate(allDates);
  const matrix = buildYearMatrix(args.year, commitMap);
  const stats = calculateStats(commitMap);

  renderMatrix(matrix);
  renderStats(stats);
}