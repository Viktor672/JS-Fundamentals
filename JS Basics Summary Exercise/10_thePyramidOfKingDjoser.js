function solve(integer,increment){
let gold=0;
let marble=0;
let lapisLazuli=0;
let stone=0;
let height=0;
let floor=0;
for(let i=integer;i>0;i-=2){
    floor++;
    height+=increment;
    let totalInteger=i**2;
    if(i<=2){
        gold=totalInteger*increment;
    }
    else{
        let stoneQuantity=(i-2)**2;
        stone+=stoneQuantity*increment;
        if(floor%5==0){
            let lapisLazuliQuantity=totalInteger-stoneQuantity;
            lapisLazuli+=lapisLazuliQuantity*increment;
        }
        else{
            let marbleQuantity=totalInteger-stoneQuantity;
            marble+=marbleQuantity*increment;
        }
        }
    }
console.log(`Stone required: ${Math.ceil(stone)}`);
console.log(`Marble required: ${Math.ceil(marble)}`);
console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
console.log(`Gold required: ${Math.ceil(gold)}`);
console.log(`Final pyramid height: ${Math.floor(height)}`);
}
solve(11,

    1);