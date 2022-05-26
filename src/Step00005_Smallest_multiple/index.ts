// https://projecteuler.net/problem=5
function solving(): void {
  const range:number[] = getRange(1, 20);
  console.log(getMinSmallestMultiple(range));
}

function getRange(startNumber: number, endNumber: number) {
  const range = [];
  for (let i = 0; i < endNumber - startNumber + 1; i += 1) range.push(startNumber + i);
  return range;
}

function getMinSmallestMultiple(range: number[]) {
  const multipliedAllNumber:number = range.reduce((prev, curr) => prev *= curr);
  const lastRangeNumber = range[range.length - 1];
  for (let i = lastRangeNumber; i <= multipliedAllNumber; i += 1) {
    if (isMulipledAllNumbers(i, range)) return i;
  }

  return -1;
}

function isMulipledAllNumbers(multipliedNumber: number, range: number[]) {
  for (let i = 0; i < range.length; i += 1) {
    const number = range[i];
    if (multipliedNumber % number !== 0 && multipliedNumber > number) return false;
  }

  return true;
}

function main() {
  solving();
}

main();

export {}; // make file ES Module
