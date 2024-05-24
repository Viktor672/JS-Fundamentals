function solve(word){
    let sum="";
for(let i=word.length-1;i>=0;i--){
   sum+=word[i];
}
console.log(sum);
}
solve('Hello');