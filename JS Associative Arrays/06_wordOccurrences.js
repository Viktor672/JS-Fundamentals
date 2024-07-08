function wordOccurrences(arr) {
    let wordArr = [];
    for (let i = 0; i < arr.length; i++) {
        let count = 1;
        let word = arr[i];
        let curObj = wordArr.find(curObj => curObj.name === word);
        if (curObj) {
            curObj['count'] += count;
        }
        else {
            wordArr.push({ name: word, count: count });
        }
    }
    wordArr.sort((a, b) => b.count - a.count);
    for (const curEl of wordArr) {
        console.log(`${curEl["name"]} -> ${curEl["count"]} times`);
    }
}
