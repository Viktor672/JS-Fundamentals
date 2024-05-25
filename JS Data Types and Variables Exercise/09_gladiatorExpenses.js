function solve(numberOfLostFights,helmetPrice,swordPrice,shieldPrice,armorPrice) {
    let totalExpenses=0;
    let shieldBrokenCount=0;
  for(let lostFights=1;lostFights<=numberOfLostFights;lostFights++){
    if(lostFights%2==0){
        totalExpenses+=helmetPrice;
    }
    if(lostFights%3==0){
        totalExpenses+=swordPrice;
    }
    if(lostFights%6==0){
        totalExpenses+=shieldPrice;
        shieldBrokenCount++;
        if(shieldBrokenCount%2==0){
            totalExpenses+=armorPrice;
        }
    }
  }
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}
solve(7,

    2,
    
    3,
    
    4,
    
    5);