function solve(arr) {
    let rotationElement = Number(arr[arr.length - 1]);
    arr.pop();
    let count = 0;
    for (let i = 1; i <= rotationElement; i++) {
        let lastElement = arr.pop();
        arr.unshift(lastElement);
    }
    console.log(arr.join(" "));
}
solve(['1', '2', '3', '4', '2']);