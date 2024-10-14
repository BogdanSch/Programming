const getNumbersDigits = (num: number): number[] => {
  let numberString = num.toString();

  let digitsArray = numberString.split("");
  let digits = digitsArray.map(Number);

  return digits;
};

const calculateArmstrongNumber = (limit: number): number[] => {
  const armstrongNumbers: number[] = [];
  for (let i = 1; i < limit; i++) {
    let currentSum: number = 0;
    let digits: number[] = getNumbersDigits(i);

    digits.forEach((digit) => {
      currentSum += digit ** digits.length;
    });

    if (currentSum === i) armstrongNumbers.push(currentSum);
  }
  return armstrongNumbers;
};

console.log(calculateArmstrongNumber(10e5));
