function solve(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let j = arr.length - 1 - i;
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    console.log(arr.join(" "));
}
solve(['a', 'b', 'c', 'd', 'e']);