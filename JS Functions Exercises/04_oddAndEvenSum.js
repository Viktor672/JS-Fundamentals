function solve(num) {
    function sumOfEven(num) {
        let numString = num + "";
        let sumEven = 0;
        for (let i = 0; i < numString.length; i++) {
            let curNum = numString[i];
            if (curNum % 2 === 0) {
                sumEven += Number(curNum);
            }
        }
        return sumEven;
    }
    function sumOfOdd(num) {
        let numString = num + "";
        let sumOdd = 0;
        for (let i = 0; i < numString.length; i++) {
            let curNum = numString[i];
            if (curNum % 2 !== 0) {
                sumOdd += Number(curNum);
            }
        }
        return sumOdd;
    }
    let sumEven = sumOfEven(num);
    let sumOdd = sumOfOdd(num);
    let resultOfOdd = `Odd sum = ${sumOdd}`;
    let resultOfSum = `Even sum = ${sumEven}`;
    console.log(`${resultOfOdd}, ${resultOfSum}`);
}
solve(1000435);