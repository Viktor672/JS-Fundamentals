function solve(startingYield){
let daysCount=0;
let totalAmountOfYield=0;
while(startingYield>=100){
    daysCount++;
    totalAmountOfYield+=startingYield;
    startingYield-=10;
    if(totalAmountOfYield>=26){
        totalAmountOfYield-=26;
    }

}
if(totalAmountOfYield>=26){
    totalAmountOfYield-=26;
}
console.log(daysCount);
console.log(totalAmountOfYield);
}
solve(111);