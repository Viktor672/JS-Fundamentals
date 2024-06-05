function solve(arr, totalRotations) {
    for (let rotations = 1; rotations <= totalRotations; rotations++) {
        let curElement = arr.shift();
arr.push(curElement);
    }
    console.log(arr.join(" "));
}
solve([51, 47, 32, 61, 21], 2);