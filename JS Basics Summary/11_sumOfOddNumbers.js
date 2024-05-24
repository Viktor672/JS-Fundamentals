function solve(n){
    let count=1;
    let i=1;
    let sum=0;
    while(count<=n){
        count++;
        sum+=i;
        console.log(i);
        i+=2;
    }
    console.log(`Sum: ${sum}`);
}
solve(5);