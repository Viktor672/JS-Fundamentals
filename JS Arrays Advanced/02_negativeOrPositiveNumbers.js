function solve(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }
    for (let i = 0; i < arr.length; i++) {
        let curElement = arr[i];
        if (curElement < 0) {
            newArr.unshift(curElement);
        }
        else {
            newArr.push(curElement);
        }
    }
    console.log(newArr.join("\n"));
}
solve(['7', '-2', '8', '9']);