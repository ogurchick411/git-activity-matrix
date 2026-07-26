export function calculateStats(commitMap) {
  let totalCommits = 0;
  let currentStreak = 0;
  let longestStreak = 0;
  let tempStreak = 0;

  const dates = Array.from(commitMap.keys()).sort();

  for (const date of dates) {
    const count = commitMap.get(date);
    totalCommits += count;
  }

  const today = new Date();
  const checkDate = new Date(today);

  while (true) {
    const iso = checkDate.toISOString().split('T')[0];
    const count = commitMap.get(iso) || 0;

    if (count > 0) {
      currentStreak++;
      checkDate.setDate(checkDate.getDate() - 1);
    } else {
      if (currentStreak === 0 && checkDate.toDateString() === today.toDateString()) {
        checkDate.setDate(checkDate.getDate() - 1);
        continue;
      }
      break;
    }
  }

  const allDates = Array.from(commitMap.entries())
    .filter(([_, count]) => count > 0)
    .map(([date]) => new Date(date))
    .sort((a, b) => a - b);

  if (allDates.length > 0) {
    tempStreak = 1;
    longestStreak = 1;

    for (let i = 1; i < allDates.length; i++) {
      const diff = (allDates[i] - allDates[i - 1]) / (1000 * 60 * 60 * 24);
      if (diff === 1) {
        tempStreak++;
        if (tempStreak > longestStreak) {
          longestStreak = tempStreak;
        }
      } else if (diff > 1) {
        tempStreak = 1;
      }
    }
  }

  return {
    totalCommits,
    currentStreak,
    longestStreak
  };
}