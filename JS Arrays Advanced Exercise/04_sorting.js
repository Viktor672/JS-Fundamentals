function solve(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let newArr = [];
    for (let i = 0; i < sortedArr.length; i++) {
        let lastEl = sortedArr.pop();
        newArr.push(lastEl);
        newArr.push(arr[i]);

    }
    console.log(newArr.join(" "));
}
solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);