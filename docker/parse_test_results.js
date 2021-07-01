const fs = require("fs");

const testResults = fs.readFileSync("./out.txt", {
  encoding: "utf8",
  flag: "r",
});
const regex = new RegExp('hostname":"(.*?)"', "g");
const result = {};

let match = regex.exec(testResults);
do {
  const matchValue = match[1];
  result[matchValue] = result.hasOwnProperty(matchValue)
    ? result[matchValue] + 1
    : 1;
} while ((match = regex.exec(testResults)) !== null);

const keys = Object.keys(result);

keys.forEach((key) => {
  console.log(`${key} => ${result[key]}`);
});