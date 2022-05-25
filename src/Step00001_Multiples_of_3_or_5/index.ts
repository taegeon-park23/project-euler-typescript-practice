// https://projecteuler.net/problem=1
function solving(): void {
  const ranges = getRange(1, 999);
  console.log(ranges.filter(predicate).reduce(plus));
}

function getRange(start: number, end: number): number[] {
  const arrays = [];
  let value = start;
  for (;;) {
    arrays.push(value);
    value += 1;
    if (value > end) return arrays;
  }
}

function predicate(value: number) {
  if (value % 3 === 0) return true;
  if (value % 5 === 0) return true;
  return false;
}

function plus(a: number, b: number) {
  return a + b;
}

function main() {
  solving();
}

main();

export {}; // make file ES Module
