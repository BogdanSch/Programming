const nestedRoots = (n, k) => {
    let result = Math.sqrt(2 * n * k);
    for (let i = n - 1; i >= 1; i--) {
        result = Math.sqrt(2 * i * k + result);
    }
    return result;
};
const n = 5;
const k = 3;
const result = nestedRoots(n, k);
console.log(`Sqrt sequence result is: ${result}`);
export {};
//# sourceMappingURL=sqrtSequence.js.map