function solve(num1, num2, num3) {
    let multiply = (num1, num2, num3) => num1 * num2 * num3;
    if (multiply(num1, num2, num3) >= 0) {
        return "Positive";
    }
    else {
        return "Negative";
    }

}
console.log(solve(4, 8, -3));