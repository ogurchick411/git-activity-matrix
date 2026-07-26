import { execSync } from 'child_process';

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
  console.log('Git Activity Matrix initialized.');
}