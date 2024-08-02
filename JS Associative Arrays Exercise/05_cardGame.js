function cardGame(arr) {
    let cardObj = {};
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(": ");
        let name = tokens.shift();
        let cardsArr = tokens.shift().split(", ");
        if (!(name in cardObj)) {
            cardObj[name] = new Set();
        }
        for (const curCard of cardsArr) {
            cardObj[name].add(curCard);
        }
    }
    for (const name in cardObj) {
        let powerObj = {
            '2': 2,
            '3': 3,
            '4': 4,
            '5': 5,
            '6': 6,
            '7': 7,
            '8': 8,
            '9': 9,
            '10': 10,
            'J': 11,
            'Q': 12,
            'K': 13,
            'A': 14
        }
        let typeObj = {
            'S': 4,
            'H': 3,
            'D': 2,
            'C': 1
        }
        let totalValue = 0;
        let cardsSet = cardObj[name];
        let cardsArr = Array.from(cardsSet.keys(cardObj[name]));
        for (const curCard of cardsArr) {
            let power = curCard[0];
            let type = curCard[1];
            if (power == '1') {
                power = '10';
                type = curCard[2];
            }
            totalValue += powerObj[power] * typeObj[type];
        }
        console.log(`${name}: ${totalValue}`);
    }
}   
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Thomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Thomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD']);
