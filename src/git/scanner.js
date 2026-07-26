import fs from 'fs';
import path from 'path';

export function findGitRepositories(dirPath, maxDepth = 3, currentDepth = 0) {
  let repos = [];

  if (currentDepth > maxDepth) {
    return repos;
  }

  try {
    const gitFolder = path.join(dirPath, '.git');
    if (fs.existsSync(gitFolder)) {
      return [dirPath];
    }

    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
        const fullPath = path.join(dirPath, entry.name);
        const found = findGitRepositories(fullPath, maxDepth, currentDepth + 1);
        repos = repos.concat(found);
      }
    }
  } catch {
    return repos;
  }

  return repos;
}