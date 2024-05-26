function solve(num1,num2,num3) {
    let semiPerimeter=(num1+num2+num3)/2;
    let triangleArea=Math.sqrt(semiPerimeter*(semiPerimeter-num1)*(semiPerimeter-num2)*(semiPerimeter-num3));
    console.log(triangleArea);
}
solve(2,

    3.5,
    
    4);