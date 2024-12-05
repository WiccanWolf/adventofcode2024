const fs = require('fs');
const rulesInput = fs.readFileSync('./Day-5/input-data-ruleset', 'utf-8');
const updatesInput = fs.readFileSync('./Day-5/input-data-updates', 'utf-8');

function parseInput(rulesStr, updatesStr) {
  const rules = rulesStr.split('\n').map((rule) => {
    const parts = rule.split('|');
    return { x: Number(parts[0]), y: Number(parts[1]) };
  });

  const updates = updatesStr
    .split('\n')
    .map((update) => update.split(',').map(Number));

  return { rules, updates };
}

function isValidUpdate(update, rules) {
  const positions = {};
  for (let i = 0; i < update.length; i++) {
    positions[update[i]] = i;
  }

  for (let i = 0; i < rules.length; i++) {
    const x = rules[i].x;
    const y = rules[i].y;
    if (positions.hasOwnProperty(x) && positions.hasOwnProperty(y)) {
      if (positions[x] > positions[y]) {
        return false;
      }
    }
  }

  return true;
}

function findMiddlePage(update) {
  const middleIndex = Math.floor(update.length / 2);
  return update[middleIndex];
}

function orderUpdate(update, rules) {
  return update.slice().sort((a, b) => {
    for (let i = 0; i < rules.length; i++) {
      const x = rules[i].x;
      const y = rules[i].y;
      if ((a === x && b === y) || (a === y && b === x)) {
        return a === x ? -1 : 1;
      }
    }
    return 0;
  });
}

function sumMiddlePages(rulesStr, updatesStr) {
  const input = parseInput(rulesStr, updatesStr);
  const rules = input.rules;
  const updates = input.updates;
  let validTotal = 0;
  let invalidTotal = 0;

  for (let i = 0; i < updates.length; i++) {
    const update = updates[i];
    if (isValidUpdate(update, rules)) {
      validTotal += findMiddlePage(update);
    } else {
      const orderedUpdate = orderUpdate(update, rules);
      invalidTotal += findMiddlePage(orderedUpdate);
    }
  }

  return { validTotal, invalidTotal };
}

const totals = sumMiddlePages(rulesInput, updatesInput);
console.dir(`All of the valid totals are: ${totals.validTotal}!`);
console.dir(
  `Oh no! Some of the totals are invalid! The ACTUAL totals is: ${totals.invalidTotal}!`
);

console.log(sumMiddlePages(rulesInput, updatesInput));
