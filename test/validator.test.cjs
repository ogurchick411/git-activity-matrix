import { validateInput } from '../src/validator.js';

function runTests() {
  console.log("Running tests...");

  try {
    validateInput({});
    console.log("✓ Test 1 Passed: valid object accepted");
  } catch (e) {
    console.error("✕ Test 1 Failed: valid object rejected");
  }

  try {
    validateInput(null);
    console.error("✕ Test 2 Failed: null should throw an error");
  } catch (e) {
    console.log("✓ Test 2 Passed: null correctly triggered an error");
  }
}

runTests();