function solve(num1, num2) {
    function factorial(num) {
        let result = 1;
        for (let i = num; i > 1; i--) {
            result *= i;
        }
        return result;
    }
    function divide(num1, num2) {
        return num1 / num2;
    }
    let result1 = factorial(num1);
    let result2 = factorial(num2);
    let finalResult = divide(result1, result2);
    console.log(finalResult.toFixed(2));
}
solve(6, 2);