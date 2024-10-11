const getNumbersDigits = (num) => {
    let numberString = num.toString();
    let digitsArray = numberString.split("");
    let digits = digitsArray.map(Number);
    return digits;
};
const calculateArmstrongNumber = (limit) => {
    const armstrongNumbers = [];
    for (let i = 1; i < limit; i++) {
        let currentSum = 0;
        let digits = getNumbersDigits(i);
        digits.forEach((digit) => {
            currentSum += digit ** digits.length;
        });
        if (currentSum === i)
            armstrongNumbers.push(currentSum);
    }
    return armstrongNumbers;
};
console.log(calculateArmstrongNumber(10e5));
export {};
//# sourceMappingURL=armstrong-numbers.js.map