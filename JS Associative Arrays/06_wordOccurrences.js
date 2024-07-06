function wordOccurrences(arr) {
    let wordArr = [];
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        let word = arr[i];
        if (wordArr.find(curObj => curObj.name === word)) {
            count++;
            let curObj = wordArr.find(curObj => curObj.name === word);
            curObj['count'] += count;
        }
        else {
            count++;
            wordArr.push({ name: word, count: count });
        }
    }
    wordArr.sort((a, b) => b.count - a.count);
    for (const curEl of wordArr) {
        console.log(`${curEl["name"]} -> ${curEl["count"]} times`);
    }
}
