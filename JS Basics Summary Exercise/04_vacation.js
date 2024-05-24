//          Friday Saturday Sunday

// Students 8.45   9.80     10.46

// Business 10.90   15.60   16

// Regular   15       20     22.50

function solve(num,type,dayOfTheWeek){
let singlePrice=0;
let totalPrice=0;
    switch(type){
    case "Students":
        if(dayOfTheWeek=="Friday"){
            singlePrice=8.45;
        }
        else if(dayOfTheWeek=="Saturday"){
            singlePrice=9.8;
        }
        else if(dayOfTheWeek=="Sunday"){
            singlePrice=10.46;
        }
        break;
        case "Business":
        if(dayOfTheWeek=="Friday"){
            singlePrice=10.9;
        }
        else if(dayOfTheWeek=="Saturday"){
            singlePrice=15.6;
        }
        else if(dayOfTheWeek=="Sunday"){
            singlePrice=16;
        }
        break;
        case "Regular":
        if(dayOfTheWeek=="Friday"){
            singlePrice=15;
        }
        else if(dayOfTheWeek=="Saturday"){
            singlePrice=20;
        }
        else if(dayOfTheWeek=="Sunday"){
            singlePrice=22.5;
        }
        break;
}

totalPrice=num*singlePrice;
if(type=="Students"){
    if(num>=30){
        totalPrice*=0.85;
    }
}
else if(type=="Business"){
    if(num>=100){
        num-=10;
        totalPrice=num*singlePrice;
    }
}
else if(type=="Regular"){
    if(num>=10 && num<=20){
        totalPrice*=0.95;
    }
}
console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
solve(30,

    "Students",
    
    "Sunday");
solve(40,

    "Regular",
    
    "Saturday");
