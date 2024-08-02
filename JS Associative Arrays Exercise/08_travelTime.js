function travelTime(arr) {
    let countryObj = {};
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(" > ");
        let [country, city, travelCost] = tokens;
        travelCost = Number(travelCost);
        if (countryObj.hasOwnProperty(country)) {
            if (countryObj[country].hasOwnProperty(city)) {
                if (travelCost < countryObj[country][city]) {
                    countryObj[country][city] = travelCost;
                }
            }
            else {
                countryObj[country][city] = travelCost;
            }
        }
        else {
            countryObj[country] = {};
            countryObj[country][city] = travelCost;
        }
    }
    let tuples = Object.entries(countryObj);
    tuples.sort((a, b) => a[0].localeCompare(b[0]));
    for (const curEl of tuples) {
        let tupleValues = Object.entries(curEl[1]);
        tupleValues.sort((a, b) => a[1] - b[1]);
        curEl[1] = tupleValues;
    }
    for (const curEl of tuples) {
        let resultArr = [];
        let country = curEl.shift();
        let valuesArr = curEl.shift();
        resultArr.push(`${country} ->`)
        for (const curValue of valuesArr) {
            resultArr.push(`${curValue[0]} -> ${curValue[1]}`);
        }
        console.log(resultArr.join(" "));
    }
}
travelTime([
    'Bulgaria > Sofia > 500',
    'Bulgaria > Sopot > 800',
    'France > Paris > 2000',
    'Albania > Tirana > 1000',
    'Bulgaria > Sofia > 200']);
