function solve(num) {
    let count = num / 10;
    let result = "";
    let remainingResult = "";
    let theSumOfRemainingResult = 10 - count;
    for (let i = 1; i <= count; i++) {
        result += '%';
    }
    for (let i = 1; i <= theSumOfRemainingResult; i++) {
        remainingResult += ".";
    }
    if (num === 100) {
        console.log(`100% Complete!`);
        console.log(`[${result}]`);
    }
    else {
        console.log(`${num}% [${result}${remainingResult}]`);
        console.log("Still loading...");
    }
}
solve(100);