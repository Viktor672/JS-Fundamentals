function solve(arr) {
    let arrAsNumber = arr.map((num) => Number(num));
    let firstEl = arrAsNumber.shift();
    let lastEl = arrAsNumber.pop();
    let sum = firstEl + lastEl;
    console.log(sum);
}
solve(['20', '30', '40']);