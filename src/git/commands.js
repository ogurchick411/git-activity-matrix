import { execSync } from 'child_process';

export function getCommitDates(targetPath, year) {
  const sinceDate = `${year}-01-01`;
  const untilDate = `${year}-12-31`;

  try {
    const command = `git -C "${targetPath}" log --since="${sinceDate}" --until="${untilDate}" --pretty=format:"%ad" --date=iso`;
    const output = execSync(command, { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'] });
    
    if (!output.trim()) {
      return [];
    }

    return output
      .split('\n')
      .map(line => line.trim())
      .filter(Boolean);
  } catch {
    return [];
  }
}