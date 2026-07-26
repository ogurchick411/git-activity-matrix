export function parseArgs(rawArgs) {
  const args = {
    path: process.cwd(),
    year: new Date().getFullYear(),
  };

  for (let i = 0; i < rawArgs.length; i++) {
    const arg = rawArgs[i];
    if (arg === '--path' && rawArgs[i + 1]) {
      args.path = rawArgs[i + 1];
      i++;
    } else if (arg === '--year' && rawArgs[i + 1]) {
      args.year = parseInt(rawArgs[i + 1], 10);
      i++;
    }
  }

  return args;
}