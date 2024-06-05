function solve(arr) {
    let newArr = [];
    let theBiggestElement = 0;
    theBiggestElement = arr[0];
    newArr.push(theBiggestElement);
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= theBiggestElement) {
            theBiggestElement = arr[i];
            newArr.push(theBiggestElement);
        }
    }
    console.log(newArr.join(" "));
}
solve([20, 3, 2, 15, 6, 1]);