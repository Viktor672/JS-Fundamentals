function inventory(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(" / ");
        let name = tokens[0];
        let level = Number(tokens[1]);
        let itemArr = [];
        for (let j = 2; j < tokens.length; j++) {
            itemArr.push(tokens[j]);
        }
        let hero = {
            Hero: name,
            level,
            items: itemArr.join(", ")
        }
        newArr.push(hero);
    }
    let sortedArr = newArr.sort((a, b) => a.level - b.level);
    for (const curObj of sortedArr) {
        console.log(`Hero: ${curObj.Hero}`);
        console.log(`level => ${curObj.level}`);
        console.log(`items => ${curObj.items}`);
    }

}
