function formatActivityCell(count, symbols) {
  if (count === 0) return symbols.empty;
  if (count < 5) return symbols.low;
  return symbols.high;
}

module.exports = { formatActivityCell };