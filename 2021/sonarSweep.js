const formatInput = require("./formatInput");

const sonarSweep = (arr) => {
  let count = 0;
  arr.forEach((element, index, arr) => {
    if (element < arr[index + 1]) count++;
  });
  return count;
};

const puzzleInput = formatInput();

console.log(sonarSweep(puzzleInput), "--part1--");
module.exports = sonarSweep;
