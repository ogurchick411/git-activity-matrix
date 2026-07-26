export function calculatePeakHour(commitDates) {
  const hoursMap = new Array(24).fill(0);

  for (const dateStr of commitDates) {
    const parts = dateStr.split(' ');
    if (parts[1]) {
      const hour = parseInt(parts[1].split(':')[0], 10);
      if (!isNaN(hour)) {
        hoursMap[hour]++;
      }
    }
  }

  let maxCount = 0;
  let peakHour = 0;

  for (let i = 0; i < 24; i++) {
    if (hoursMap[i] > maxCount) {
      maxCount = hoursMap[i];
      peakHour = i;
    }
  }

  return {
    peakHour,
    maxCount
  };
}