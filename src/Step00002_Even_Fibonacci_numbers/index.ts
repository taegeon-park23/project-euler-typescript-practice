// https://projecteuler.net/problem=2

function solving(): void {
  console.log(getFibonacciLessThan(4_000_000).filter(isEven).reduce(sum));
}

function getFibonacciLessThan(max: number): number[] {
  const ret = [];
  let currentValue = -1;
  let i = 1;
  for (;;) {
    currentValue = fibonacci((i += 1));
    if (currentValue > max) return ret;
    ret.push(currentValue);
  }
}

function fibonacci(x: number, mems: number[] = [0]): number {
  if (x === 1 || x === 2) {
    mems.push(x);
    return x;
  }

  if (mems.length - 1 === x - 2) return mems[x - 2] + fibonacci(x - 1);
  return fibonacci(x - 2) + fibonacci(x - 1);
}

function isEven(value: number): boolean {
  return value % 2 === 0;
}

function sum(a: number, b: number): number {
  return a + b;
}

function main() {
  solving();
}

main();

export {}; // make file ES Module
