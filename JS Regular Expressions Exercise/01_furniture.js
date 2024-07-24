function furniture(arr) {
    let regex = />>(?<furniture>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<quantity>\d+)/gm;
    let furnituresArr = [];
    let totalPrice = 0;
    let action = arr.shift();
    while (action != "Purchase") {
        let match = regex.exec(action);
        while (match != null) {
            let { furniture, price, quantity } = match.groups;
            furnituresArr.push(furniture);
            totalPrice += Number(price) * Number(quantity);
            match = regex.exec(action)
        }
        action = arr.shift();
    }
    console.log('Bought furniture:');
    for (const curFurniture of furnituresArr) {
        console.log(curFurniture);
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3',

    '>>TV<<300!5',
    
    '>Invalid<<!5',
    
    'Purchase']);