function validateInput(data) {
  if (!data || typeof data !== "object") {
    throw new Error("Invalid input data: expected an object");
  }
  return true;
}

module.exports = { validateInput };