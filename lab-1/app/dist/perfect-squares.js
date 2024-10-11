function countPerfectSquares(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        let sqrt = Math.sqrt(numbers[i]);
        if (Number.isInteger(sqrt)) {
            count++;
        }
    }
    return count;
}
let numbers = [];
// for (let i = 0; i < 7; i++) {
//   let num = parseInt(prompt("Введіть число " + (i + 1) + ":"));
//   numbers.push(num);
// }
numbers = [5, 12, 7, 3, 9, 1, 8]; //, 4, 6, 10, -2];
let result = countPerfectSquares(numbers);
console.log("The amount of numbers which are perfect squares: " + result);
export {};
//# sourceMappingURL=perfect-squares.js.map