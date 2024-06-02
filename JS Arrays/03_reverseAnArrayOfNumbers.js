function solve(n, array) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result[i] = array[i];
    }
    let reversed = [];
    for (let i = result.length - 1; i >= 0; i--) {
        reversed[reversed.length] = result[i];
    }
    console.log(reversed.join(" "));
}
solve(3, [10, 20, 30, 40, 50]);