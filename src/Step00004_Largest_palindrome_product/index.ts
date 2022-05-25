// https://projecteuler.net/problem=4

function getPailndromeNumber(digit: number): number {
  const count = getMaxNumber(digit);
  let leftNumber = count;
  let rightNumber = count;
  let maxPailndromeNum = 0;

  for (let i = 0; i < count; i += 1) {
    for (let j = 0; j < count; j += 1) {
      const tempPailndromeNum = leftNumber * rightNumber;
      if (isPailndromeNumber(tempPailndromeNum)) {
        maxPailndromeNum = maxPailndromeNum < tempPailndromeNum
          ? tempPailndromeNum
          : maxPailndromeNum;
        break;
      }
      rightNumber -= 1;
    }

    rightNumber = count;
    leftNumber -= 1;
  }

  return maxPailndromeNum;
}

function getMaxNumber(digit: number): number {
  let num = 1;
  for (let i = 0; i < digit; i += 1) {
    num *= 10;
  }

  return num - 1;
}

function isPailndromeNumber(num: number): boolean {
  const str = String(num);
  const len = str.length;
  if (isEven(len)) {
    for (let i = 0; i < len / 2; i += 1) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }

    return true;
  }

  return false;
}

function isEven(num: number): boolean {
  return num % 2 === 0;
}

function main() {
  console.log(getPailndromeNumber(4));
}

main();
