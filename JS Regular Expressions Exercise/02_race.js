function race(arr) {
    let letterRegex = /[A-Za-z]/g;
    let distanceRegex = /\d/g;
    let obj = {};
    let names = arr.shift().split(", ");
    for (const curName of names) {
        obj[curName] = 0;
    }
    let action = arr.shift();
    while (action != 'end of race') {
        let name = action.match(letterRegex).join("");
        let distance = action.match(distanceRegex).map(x => Number(x));
        let sum = 0;
        for (const curNum of distance) {
            sum += curNum;
        }
        if (obj.hasOwnProperty(name)) {
            obj[name] += sum;
        }
        action = arr.shift()
    }
    let tuples = Object.entries(obj);
    tuples.sort((a, b) => b[1] - a[1])
    console.log(`1st place: ${tuples[0][0]}`);
    console.log(`2nd place: ${tuples[1][0]}`);
    console.log(`3rd place: ${tuples[2][0]}`);

}
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',

    'Mi*&^%$ch123o!#$%#nne787) ',

    '%$$B(*&&)i89ll)*&) ',

    'R**(on%^&ald992) ',

    'T(*^^%immy77) ',

    'Ma10**$#g0g0g0i0e',

    'end of race']);