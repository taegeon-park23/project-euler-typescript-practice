// https://projecteuler.net/problem=3

function primeFactor(num: number): number[] {
  const rets = [];
  let n = num;
  // 2로 나눠지면 계속 나누기
  while (n % 2 === 0) {
    rets.push(2);
    n /= 2;
  }

  // 3부터 루트n까지 나눌 수 있으면 나누기
  for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
      rets.push(i);
      n /= i;
    }
  } // 루트n부터 n까지 소수인 경우 처리 if (n > 2) answer.push(n);

  if (n > 2) rets.push(n);
  return rets;
}

function max(a: number, b: number): number {
  return a > b ? a : b;
}

function main() {
  console.log(primeFactor(600851475143).reduce(max));
}

main();

export {}; // make file ES Module
