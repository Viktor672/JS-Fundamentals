function solve(arr) {
    let k = arr.shift();
    let firstArr = arr.slice(0, k);
    let lastArr = arr.slice(-k);
    console.log(firstArr.join(" "));
    console.log(lastArr.join(" "));

}
solve([2,

    7, 8, 9]);