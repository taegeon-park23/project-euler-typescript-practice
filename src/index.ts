// https://projecteuler.net/problem=5
function solving(): void {
  const range:number[] = getRange(1, 10);
  console.log(range);
}

function getRange(startNumber: number, endNumber: number) {
  const ranges = new Array(endNumber - startNumber + 1);
  console.log(ranges.map((value, index) => startNumber + index)).foreach((value, index) => {
    console.log(value, index);
  });

  return ranges;
}

function main() {
  solving();
}

main();

export {}; // make file ES Module
