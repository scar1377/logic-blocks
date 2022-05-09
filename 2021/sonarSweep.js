const puzzleInput = require("./puzzle-input");

const sonarSweep = (arr) => {
  let count = 0;
  arr.forEach((element, index, arr) => {
    if (element < arr[index + 1]) count++;
  });
  return count;
};
console.log(sonarSweep(puzzleInput));
module.exports = sonarSweep;
