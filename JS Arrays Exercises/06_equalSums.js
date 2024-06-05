function solve(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }
    for (let i = 0; i < arr.length; i++) {
        let sumToTheLeft = 0;
        let sumToTheRight = 0;
        for (let j = 0; j < i; j++) {
            sumToTheLeft += arr[j];
        }
        for (let k = i + 1; k < arr.length; k++) {
            sumToTheRight += arr[k];
        }
        if (sumToTheLeft === sumToTheRight) {
            console.log(i);
            return;
        }
    }
    console.log("no");
}
solve([10, 5, 5, 99,

    3, 4, 2, 5, 1,

    1, 4]);