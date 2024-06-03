function solve(arr, givenNumber) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }
    for (let i = 0; i < arr.length; i++) {
        let num1 = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let num2 = arr[j];
            let sum = 0;
            sum += num1 + num2;
            if (sum === givenNumber) {
                newArr.push(num1, num2);
                console.log(newArr.join(" "));
                newArr = [];
            }
        }
    }
}
solve([14, 20, 60, 13, 7, 19, 8],

    27);