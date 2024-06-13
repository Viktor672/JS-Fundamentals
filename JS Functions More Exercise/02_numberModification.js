function solve(number) {
    let sum = 0;
    let averageSum = 0;
    let numberString = number.toString();
    while (averageSum <= 5) {
        for (let i = 0; i < numberString.length; i++) {
            let curDigit = numberString[i];
            sum += Number(curDigit);
        }
        averageSum = sum / Number(numberString.length);
        if (averageSum > 5) {
            break;
        }
        sum = 0;
        numberString += "9";
    }
    console.log(numberString);
}
solve(5835);