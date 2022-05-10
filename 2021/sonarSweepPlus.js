const sonarSweep = require("./sonarSweep");
const formatInput = require("./formatInput");

const sonarSweepPlus = (arr) => {
  const summedMeasurements = [];
  arr.forEach((element, index, arr) => {
    summedMeasurements.push(element + arr[index + 1] + arr[index + 2]);
  });
  return sonarSweep(summedMeasurements);
};

const puzzleInput = formatInput();
console.log(sonarSweepPlus(puzzleInput), "--part2--");
module.exports = sonarSweepPlus;
