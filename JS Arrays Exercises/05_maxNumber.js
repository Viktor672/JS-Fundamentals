function solve(arr) {
    let topArr = [];
    for (let i = 0; i5< arr.length; i++) {
        let isTop = true;
        let num1 = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let num2 = arr[j];
            if (num2 >= num1) {
                isTop = false;
                break;
            }
        }
        if (isTop) {
            topArr.push(num1);
        }
    }
    console.log(topArr.join(" "));
}
solve([14, 24, 3, 19, 15, 17]);