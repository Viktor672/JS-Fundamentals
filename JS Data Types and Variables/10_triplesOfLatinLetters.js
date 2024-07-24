function solve(n) {
    let number=Number(n);
    for(let i=0;i<number;i++){
        let firstLetter=String.fromCharCode(97+i);
        for(let j=0;j<number;j++){
            let secondLetter=String.fromCharCode(97+j);
            for(let k=0;k<number;k++){
                let thirdLetter=String.fromCharCode(97+k);
                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
            }
        }
    }
}
solve(3);
// function solve(n){
//     let number=Number(n);
//    for (let i = 97; i < 97 + number; i++) {
//        let firstLetter = String.fromCharCode(i);
//     for (let j = 97; j < 97 + number; j++) {
//          let secondLetter = String.fromCharCode(j);
//        for (let k = 97; k < 97 + number; k++) {
//          let thirdLetter = String.fromCharCode(k);
//          console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
//        }
//      }
//    }
// }
