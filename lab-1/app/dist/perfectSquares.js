const countPerfectSquares = (numbers) => {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        let sqrt = Math.sqrt(numbers[i]);
        if (Number.isInteger(sqrt)) {
            count++;
        }
    }
    return count;
};
let numbers = [];
for (let i = 0; i < 7; i++) {
    let input = prompt("Введіть число " + (i + 1) + ":");
    if (input) {
        let num = parseFloat(input);
        numbers.push(num);
    }
}
/* numbers = [0, 12, 7, 3, 9, 1, 8]; //, 4, 6, 10, -2]; */
let result = countPerfectSquares(numbers);
alert("The amount of numbers which are perfect squares: " + result);
export {};
//# sourceMappingURL=perfectSquares.js.map