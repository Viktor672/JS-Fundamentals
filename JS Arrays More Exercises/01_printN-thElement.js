function solve(arr) {
    let lastElement = Number(arr[arr.length - 1]);
    let newArr = [];
    for (let i = 0; i < arr.length; i += lastElement) {
        if (i != arr.length - 1) {
            newArr.push(arr[i])
        }

    }
    console.log(newArr.join(" "));
}
solve(['1', '2', '3', '4', '5', '6']);