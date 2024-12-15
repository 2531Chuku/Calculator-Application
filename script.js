// calculator, improve it , testing
function userInputs(value, value2, operator) {
  switch (operator) {
    case "+":
      return calculateSum(value, value2);
    case "-":
      return calculateDiff(value, value2);
    case "/":
      return calculateDivision(value, value2);
    case "*":
      return calculateProduct(value, value2);
    case "%":
      return calculateRemainder(value, value2);
  }
}

function calculateSum(value, value2) {
  return value + value2;
}

function calculateDiff(value, value2) {
  return value - value2;
}
function calculateDivision(value, value2) {
  return value / value2;
}
function calculateProduct(value, value2) {
  return value * value2;
}
function calculateRemainder(value, value2) {
  return value % value2;
}

console.log(userInputs(13, 2, "%"));
