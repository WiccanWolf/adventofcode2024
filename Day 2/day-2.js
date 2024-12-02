const fs = require('fs');

const input = fs
  .readFileSync('./Day 2/input-data', 'utf8')
  .trim()
  .split(/\n/)
  .map((row) => row.split(/\s/).map(Number));

let safeReportsCount = 0;

function isSafeReport(report) {
  const validDifferences = report.every((level, i) => {
    if (i === 0) return true;
    const diff = level - report[i - 1];
    return diff >= -3 && diff <= 3 && diff !== 0;
  });
  const isIncreasing = report.every(
    (level, i) => i === 0 || level > report[i - 1]
  );
  const isDecreasing = report.every(
    (level, i) => i === 0 || level < report[i - 1]
  );

  return validDifferences && (isIncreasing || isDecreasing);
}
for (let index = 0; index < input.length; index++) {
  const safetyReport = input[index];

  if (isSafeReport(safetyReport)) {
    safeReportsCount++;
  } else {
    let isSafeWithRemoval = false;
    for (let i = 0; i < safetyReport.length; i++) {
      const modifiedReport = [];
      for (let j = 0; j < safetyReport.length; j++) {
        if (j !== i) modifiedReport.push(safetyReport[j]);
      }
      if (isSafeReport(modifiedReport)) {
        isSafeWithRemoval = true;
        break;
      }
    }
    if (isSafeWithRemoval) {
      safeReportsCount++;
    }
  }
}
console.log(`Number of safe reports: ${safeReportsCount}`);
