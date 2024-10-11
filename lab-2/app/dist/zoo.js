const findCombinations = (K, M) => {
    if (M % 2 !== 0) {
        console.log("No valid combinations: total wings must be even.");
        return;
    }
    const parrots = M / 2;
    const legsFromParrots = parrots * 2;
    const remainingLegs = K - legsFromParrots;
    if (remainingLegs < 0 || remainingLegs % 4 !== 0) {
        console.log("No valid combinations found.");
        return;
    }
    const maxGuineaPigsLizards = remainingLegs / 4;
    for (let gineaPigsAmount = 0; gineaPigsAmount <= maxGuineaPigsLizards; gineaPigsAmount++) {
        const lizardsAmount = maxGuineaPigsLizards - gineaPigsAmount;
        console.log(`Guinea pigs: ${gineaPigsAmount}, Lizards: ${lizardsAmount}, Parrots: ${parrots}`);
    }
};
findCombinations(24, 4);
console.log("-".repeat(10));
findCombinations(34, 6);
export {};
//# sourceMappingURL=zoo.js.map