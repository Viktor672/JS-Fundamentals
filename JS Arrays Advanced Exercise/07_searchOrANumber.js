function solve(arr1, arr2) {
    let newArr = [];
    let takeCommand = arr2.shift();
    let removeCommand = arr2.shift();
    let searchedNumber = arr2.shift();
    for (let i = 1; i <= takeCommand; i++) {
        let curEl = arr1.shift();
        newArr.push(curEl);
    }
    newArr.splice(0, removeCommand);
    let count = 0;
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === searchedNumber) {
            count++;
        }
    }
    console.log(`Number ${searchedNumber} occurs ${count} times.`);
}
solve([7, 1, 5, 8, 2, 7],

    [3, 1, 5]);