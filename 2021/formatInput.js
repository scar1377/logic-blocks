const fs = require("fs");

const formatInput = () => {
  const inputData = fs.readFileSync("./puzzle-input.txt", { encoding: "utf8" });

  const inputArr = inputData.split("\n");
  const puzzleInput = inputArr.map((numStr) => Number(numStr));
  return puzzleInput;
};

module.exports = formatInput;
