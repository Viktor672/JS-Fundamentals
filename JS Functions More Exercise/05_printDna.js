function solve(num){
    let arr = 'ATCGTTAGGG'.split('')
    for(let i = 1; i <= num; i++){
        let [p, q] = arr.splice(0,2)
        if(i === 1 || i % 4 === 1){
            console.log(`**${p}${q}**`);
        }
        else if(i === 2 || i % 4 === 2){
            console.log(`*${p}--${q}*`);
        }
        else if(i === 3 || i % 4 === 3){
            console.log(`${p}----${q}`);
        }
        else if(i === 4 || i % 4 === 0){
            console.log(`*${p}--${q}*`);
        }
 
        arr.push(p)
        arr.push(q)
    }
}
solve(4);