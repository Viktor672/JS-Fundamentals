function solve(arr1, arr2) {
    let bomb = arr2[0];
    let power = arr2[1];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === bomb) {
            let startIndex = Math.max(0, i - power);
            let endIndex = Math.min(arr1.length - 1, i + power);
            let bombCount = endIndex - startIndex + 1;
            arr1.splice(startIndex, bombCount);
            i = startIndex - 1;
        }
    }
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    console.log(sum);
}
solve([1, 1, 2, 1, 1, 1,

    2, 1, 1, 1],

    [2, 1]);   