function solve(arr) {
    let newArr = [];
    let doubleNumber = 0;
    for (let i = 0; i < arr.length; i++) {
        let curNum = arr[i];
        if (i % 2 !== 0) {
            doubleNumber = curNum * 2;
            newArr.unshift(doubleNumber);
        }
    }
    console.log(newArr.join(" "));
}
solve([10, 15, 20, 25]);