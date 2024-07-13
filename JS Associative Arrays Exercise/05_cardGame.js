function cardGame(arr) {
    let cardObj = {};
    for (let i = 0; i < arr.length; i++) {
        let [name, cards] = arr[i].split(": ");
        let cardsArr = cards.split(", ")
        if (!cardObj[name]) {
            cardObj[name] = new Set();
        }
        for (const curCard of cardsArr) {
            cardObj[name].add(curCard)
        }
    }
    for (const key in cardObj) {
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
            'C': 1,
            'D': 2,
            'H': 3,
            'S': 4
        }
        let sum = 0;
        let values = cardObj[key];
        for (const curEl of values) {
            let power = curEl[0];
            let type = curEl[1];
            if (power == '1') {
                power = '10';
                type = curEl[2];
            }
            sum += powerObj[power] * typeObj[type];
        }
        console.log(`${key}: ${sum}`);
    }
}

cardGame([

    'Peter: 2C, 4H, 9H, AS, QS',

    'Tomas: 3H, 10S, JC, KD, 5S, 10S',

    'Andrea: QH, QC, QS, QD',

    'Tomas: 6H, 7S, KC, KD, 5S, 10C',

    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'

]);