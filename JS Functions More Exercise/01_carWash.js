function solve(arr) {
    let carsClarity = 0;
    for (let i = 0; i < arr.length; i++) {
        let curCommand = arr[i];
        if (curCommand === "soap") {
            carsClarity += 10;
        }
        else if (curCommand === "water") {
            carsClarity *= 1.20;
        }
        else if (curCommand === "vacuum cleaner") {
            carsClarity *= 1.25;
        }
        else if (curCommand === "mud") {
            carsClarity *= 0.9;
        }
    }
    console.log(`The car is ${carsClarity.toFixed(2)}% clean.`);
}
solve(["soap", "water", "mud", "mud", "water", "mud",

    "vacuum cleaner"]);