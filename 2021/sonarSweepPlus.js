const sonarSweep = require("./sonarSweep");
const puzzleInput = require("./puzzle-input");

const sonarSweepPlus = (arr) => {
  const summedMeasurements = [];
  arr.forEach((element, index, arr) => {
    summedMeasurements.push(element + arr[index + 1] + arr[index + 2]);
  });
  return sonarSweep(summedMeasurements);
};

console.log(sonarSweepPlus(puzzleInput));
module.exports = sonarSweepPlus;
