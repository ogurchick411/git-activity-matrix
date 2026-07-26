export function buildYearMatrix(year, commitMap) {
  const startDate = new Date(year, 0, 1);
  const endDate = new Date(year, 11, 31);
  
  const matrix = Array.from({ length: 7 }, () => []);
  const currentDate = new Date(startDate);

  const dayOfWeekOffset = currentDate.getDay();
  for (let i = 0; i < dayOfWeekOffset; i++) {
    matrix[i].push(null);
  }

  while (currentDate <= endDate) {
    const dayOfWeek = currentDate.getDay();
    const isoDate = currentDate.toISOString().split('T')[0];
    const count = commitMap.get(isoDate) || 0;

    matrix[dayOfWeek].push({
      date: isoDate,
      count: count
    });

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return matrix;
}