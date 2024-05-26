function solve(numAsString) {
    let decimal=0;
    let power=0;
    for(let i=numAsString.length-1;i>=0;i--){
        decimal+=Math.pow(2,power)*Number(numAsString[i]);
        power++;
    }
    console.log(decimal);
}
solve('00001001');