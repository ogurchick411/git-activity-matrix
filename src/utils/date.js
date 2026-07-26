export function aggregateCommitsByDate(commitDates) {
  const map = new Map();

  for (const dateStr of commitDates) {
    const formattedDate = dateStr.split(' ')[0];
    const currentCount = map.get(formattedDate) || 0;
    map.set(formattedDate, currentCount + 1);
  }

  return map;
}