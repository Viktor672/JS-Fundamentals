function softUniBarIncome(arr) {
    let regex = /%(?<name>[A-Z][a-z]+)%[^|.&%]*<(?<product>\w+)>[^|.&%]*[|](?<count>\d+)[|][^0-9|.&%]*(?<price>\d+\.?\d*)\$/g;
    let action = arr.shift();
    let totalIncome = 0;
    while (action != "end of shift") {
        let match = regex.exec(action);
        while (match != null) {
            let name = match.groups.name;
            let product = match.groups.product;
            let count = match.groups.count;
            let price = match.groups.price
            console.log(`${name}: ${product} - ${(price * count).toFixed(2)}`);
            totalIncome += price * count;
            match = regex.exec(action);
        }
        action = arr.shift();
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
softUniBarIncome(['%George%<Croissant>|2|10.3$', '%Peter%<Gum>|1|1.3$', '%Maria%<Cola>|1|2.4$', 'end of shift']);