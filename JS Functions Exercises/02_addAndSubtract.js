function solve(num1, num2, num3) {
    function sum(num1, num2) {
        return num1 + num2;
    }
    function subract(num1, num2) {
        return num1 - num2;
    }
    let thesumOfTheFirstTwo = sum(num1, num2);
    let result = subract(thesumOfTheFirstTwo, num3);
    console.log(result);
}
solve(23, 6, 10);