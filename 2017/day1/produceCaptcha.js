const puzzleInput = require("./puzzle-input");

const produceCaptcha = (numStr) => {
  let sum = 0;
  if (numStr.length < 2) return 0;

  for (let i = 0; i < numStr.length - 1; i++) {
    if (numStr[i] === numStr[i + 1]) sum += parseInt(numStr[i + 1]);
  }
  if (numStr[numStr.length - 1] === numStr[0]) sum += parseInt(numStr[0]);

  return sum;
};

const result = produceCaptcha(puzzleInput);
console.log(result, "<<<<<<<<<<<<result");

module.exports = produceCaptcha;
