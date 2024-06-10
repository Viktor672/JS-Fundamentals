function solve(num1, num2, num3) {
    let theSmallestNum = 0;
    if (num1 <= num2 && num1 <= num3) {
        theSmallestNum = num1;
    }
    else if (num2 <= num1 && num2 <= num3) {
        theSmallestNum = num2;
    }
    else if (num3 <= num1 && num3 <= num2) {
        theSmallestNum = num3;
    }
    console.log(theSmallestNum);
}
solve(2,

    2,

    2);