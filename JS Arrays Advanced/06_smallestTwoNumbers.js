function solve(arr) {
    let sortedArr = arr.sort((x, y) => x - y);
    let theSmallestNum = sortedArr[0];
    let theSecondSmallestNum = sortedArr[1];
    console.log(`${theSmallestNum} ${theSecondSmallestNum}`);
}
solve([30, 15, 50, 5]);