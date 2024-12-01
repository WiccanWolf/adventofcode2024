const { readFileSync } = require('fs');

const input = readFileSync('./Day 1/numbers', 'utf-8')
  .trim()
  .split('\n')
  .map((line) => line.split('   ').map(Number));

const transposed = [];
for (let i = 0; i < input[0].length; i++) {
  const column = [];
  for (let j = 0; j < input.length; j++) {
    column.push(input[j][i]);
  }
  transposed.push(column);
}

const sortedColumns = transposed.map((column) =>
  column.sort((num1, num2) => num1 - num2)
);

let totalDifference = 0;
sortedColumns[0].forEach((num, index) => {
  totalDifference += Math.abs(num - sortedColumns[1][index]);
});

console.dir(`Total Difference: ${totalDifference}`, { depth: null });

let totalSimilarityScore = 0;
sortedColumns[0].forEach((num) => {
  const countInRight = sortedColumns[1].filter((n) => n === num).length;
  totalSimilarityScore += num * countInRight;
});

console.dir(`Total Similarity Score: ${totalSimilarityScore}`, { depth: null });
