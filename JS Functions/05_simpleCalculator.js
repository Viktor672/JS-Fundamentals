
function solve(num1, num2, string) {
    let multiply = (num1, num2) => num1 * num2;
    let divide = (num1, num2) => num1 / num2;
    let add = (num1, num2) => num1 + num2;
    let subtract = (num1, num2) => num1 - num2;
    let result = 0;
    switch (string) {
        case "multiply":
            result = multiply(num1, num2); break;
        case 'divide':
            result = divide(num1, num2); break;
        case "add":
            result = add(num1, num2); break;
        case "subtract":
            result = subtract(num1, num2); break;
    }
    console.log(result);
}

solve(40,

    8,

    'divide');