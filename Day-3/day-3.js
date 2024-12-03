const fs = require('fs');

const input = fs.readFileSync('./Day-3/input-data.txt', 'utf-8');

function processInput(data) {
  let isMulEnabled = true;
  let totalSum = 0;
  let index = 0;

  while (index < data.length) {
    if (data.startsWith('do()', index)) {
      isMulEnabled = true;
      index += 4;
    } else if (data.startsWith("don't()", index)) {
      isMulEnabled = false;
      index += 7;
    } else if (data.startsWith('mul(', index)) {
      const match = data.slice(index).match(/^mul\((\d+),(\d+)\)/);
      if (match) {
        const x = parseInt(match[1], 10);
        const y = parseInt(match[2], 10);
        if (isMulEnabled) {
          totalSum += x * y;
        }
        index += match[0].length;
      } else {
        index++;
      }
    } else {
      index++;
    }
  }

  return totalSum;
}

const result = processInput(input);
console.log('Total Sum of Results:', result);
