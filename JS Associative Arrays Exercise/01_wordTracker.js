function wordTracker(arr) {
    let wordObj = {};
    let mainWords = arr.shift().split(" ");
    for (const word of mainWords) {
        wordObj[word] = 0;
    }

    for (const word of arr) {
        if (wordObj.hasOwnProperty(word)) {
            wordObj[word] += 1;
        }
        else {
            continue;
        }
    }

    let tuples = Object.entries(wordObj);
    tuples.sort((a, b) => b[1] - a[1]);
    for (const curEl of tuples) {
        console.log(`${curEl[0]} - ${curEl[1]}`);
    }
}
