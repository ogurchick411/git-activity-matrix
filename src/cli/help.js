import chalk from 'chalk';

export function showHelp() {
  console.log(`
${chalk.bold.cyan('git-activity-matrix')} - Terminal-based activity matrix and commit analytics

${chalk.bold('USAGE:')}
  gmatrix [options]

${chalk.bold('OPTIONS:')}
  --path <path>    Path to repository or directory containing repositories (default: current directory)
  --year <year>    Target year for matrix rendering (default: current year)
  --theme <name>   Color palette theme: github, cyberpunk, monokai (default: github)
  --help           Show this help message
`);
}