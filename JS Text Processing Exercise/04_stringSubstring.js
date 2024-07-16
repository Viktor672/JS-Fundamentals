function stringSubstring(word, text) {
    let isFound = false;
    let textArr = text.split(" ");
    for (const curWord of textArr) {
        if (curWord.toLowerCase() === word.toLowerCase()) {
            isFound = true;
        }
    }
    if (isFound) {
        console.log(word);
    }
    else {
        console.log(`${word} not found!`);
    }
}
stringSubstring('python',

    'JavaScript is the best programming language');