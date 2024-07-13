function travelTime(arr) {
    let countryObj = {};
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(" > ");
        let country = tokens.shift();
        let town = tokens.shift();
        let price = tokens.shift();
        if (!countryObj.hasOwnProperty(country)) {
            countryObj[country] = {};
        }
        if (!countryObj[country].hasOwnProperty(town)) {
            countryObj[country][town] = price
        }
        let oldPrice = countryObj[country][town];
        if (oldPrice > price) {
            countryObj[country][town] = price;
        }

    }
    let tuples = Object.entries(countryObj);
    tuples.sort((a, b) => a[0].localeCompare(b[0]))
    for (const curEl of tuples) {
        let valuesArr = curEl[1];
        valuesArr = Object.entries(valuesArr);
        valuesArr.sort((a, b) => Number(a[1]) - Number(b[1]));
        curEl[1] = valuesArr;
    }
    for (const curEl of tuples) {
        let finalArr = [];
        let country = curEl.shift();
        finalArr.push(`${country} ->`);
        let key = curEl[0];
        for (const element of key) {
            finalArr.push(`${element[0]} -> ${element[1]}`);
        }

        console.log(finalArr.join(" "));
    }

}
travelTime([

    'Bulgaria > Sofia > 25000',

    'Bulgaria > Sofia > 25000',

    'Kalimdor > Orgrimar > 25000',

    'Albania > Tirana > 25000',

    'Bulgaria > Varna > 25010',

    'Bulgaria > Lukovit > 10'

])