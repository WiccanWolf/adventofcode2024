const fs = require('fs');

function createJSONFromPairs(
  inputFile,
  outputFile = './Day 1/day-1-value-pairs.json'
) {
  const rawData = fs.readFileSync('./Day 1/day-1-values.json', 'utf-8');
  const input = JSON.parse(rawData);
  const data = [];
  for (let i = 0; i < input.pairs.length; i += 2) {
    if (i + 1 < input.pairs.length) {
      const key = input.pairs[i][0];
      const value = input.pairs[i + 1][0];
      data.push({ [key]: value });
    } else {
      console.error('Skipping an incomplete pair at the end:', input.pairs[i]);
    }
  }

  fs.writeFileSync(outputFile, JSON.stringify(data, null, 4), 'utf-8');
  console.log(`Data has been written to ${outputFile}`);
}
createJSONFromPairs();

function convertAndCalculateFromFile(filePath) {
  try {
    const rawData = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(rawData);

    if (!Array.isArray(data)) {
      throw new Error('Invalid JSON structure. Expected an array of objects.');
    }
    const processedData = data.map((item) => {
      const [key, value] = Object.entries(item)[0];
      const keyStr = String(key);
      const valueStr = String(value);
      const keyNum = Number(keyStr);
      const valueNum = Number(valueStr);
      const result = keyNum - valueNum;

      return { key: keyStr, value: valueStr, result };
    });
    return processedData;
  } catch (error) {
    console.error('Error reading or processing the file:', error.message);
  }
}
const filePath = './Day 1/day-1-value-pairs.json';
convertAndCalculateFromFile(filePath);

exports.pairProcessor = (pairs) => {
  return pairs.map((pair) => {
    const difference = Math.abs(pair[0] - pair[1]);
    return [difference];
  });
};
