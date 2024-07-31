function mirrorWords(arr) {
    let string = arr.shift();
    let mirrorWordsArr = [];
    let mirrorPattern = /([@#])([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/gm;
    let matches = string.matchAll(mirrorPattern);
    let wordPairsCounter = 0;
    for (const curMatch of matches) {
        wordPairsCounter++;
        let firstWord = curMatch[2];
        let secondWord = curMatch[3];
        let secondWordReversed = secondWord.split("").reverse().join("");
        if (firstWord == secondWordReversed) {
            mirrorWordsArr.push(`${firstWord} <=> ${secondWord}`);
        }
    }
    if (wordPairsCounter > 0) {
        console.log(`${wordPairsCounter} word pairs found!`);
    }
    else {
        console.log("No word pairs found!");
    }
    if (mirrorWordsArr.length > 0) {
        console.log("The mirror words are:");
        console.log(mirrorWordsArr.join(", "));
    }
    else {
        console.log("No mirror words!");
    }
}
