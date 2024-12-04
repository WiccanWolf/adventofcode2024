const fs = require('fs');
const inputString = fs.readFileSync('./Day-4/input-data', 'utf-8');

/* Turning the Input String into a grid where required */

function convertInputToGrid(input) {
  return input
    .trim()
    .split('\n')
    .map((line) => line.split(''));
}

/* Part One Code Beneath */
function findXMAS(grid) {
  const word = 'XMAS';
  let countPart1 = 0;
  const directions = [
    { dx: 1, dy: 0 },
    { dx: -1, dy: 0 },
    { dx: 0, dy: 1 },
    { dx: 0, dy: -1 },
    { dx: 1, dy: 1 },
    { dx: -1, dy: -1 },
    { dx: 1, dy: -1 },
    { dx: -1, dy: 1 },
  ];

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid.length; column++) {
      for (const { dx, dy } of directions) {
        if (searchFromCell(grid, row, column, dx, dy, word)) {
          countPart1++;
        }
      }
    }
  }
  console.dir(`The amount of times ${word} was found is: ${countPart1}!`);

  /* Part Two Code Beneath */
  const lines = inputString.split(`\n`);
  let countPart2 = 0;
  const cornerArr = [
    [-1, -1],
    [-1, 1],
    [1, 1],
    [1, -1],
  ];
  const validCorners = ['MMSS', 'MSSM', 'SSMM', 'SMMS'];
  for (let i = 0; i < lines.length; ++i) {
    for (let j = 0; j < lines[0].length; ++j) {
      if (lines[i][j] === 'A') {
        const corners = cornerArr.reduce(
          (p, [x, y]) => (p += lines[i + x]?.[j + y]),
          ''
        );
        if (validCorners.includes(corners)) countPart2++;
      }
    }
  }

  console.dir(`The amount of times X-MAS was found is: ${countPart2}!`);
}

/* Part One Code Cont.*/
function searchFromCell(grid, startRow, startColumn, dx, dy, word) {
  const wordLength = word.length;
  let x = startRow;
  let y = startColumn;

  for (let i = 0; i < wordLength; i++) {
    if (
      x < 0 ||
      x >= grid.length ||
      y < 0 ||
      y >= grid[x].length ||
      grid[x][y] !== word[i]
    ) {
      return false;
    }
    x += dx;
    y += dy;
  }

  return true;
}

findXMAS(convertInputToGrid(inputString));
