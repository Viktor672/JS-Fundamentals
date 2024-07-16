function hardWords(arr) {
    let letter = arr.shift();
    let letterArr = letter.split(" ").filter(word => word.includes("_"));
    let givenWords = arr.shift();
    let punctuationArr = [".", ",", "?", "!"];
    for (let i = 0; i < punctuationArr.length; i++) {
        for (let j = 0; j < letterArr.length; j++) {
            if (letterArr[j].includes(punctuationArr[i])) {
                letterArr[j] = Array.from(letterArr[j]);
                let indexOf = letterArr[j].indexOf(punctuationArr[i]);
                letterArr[j].splice(indexOf, 1);
                letterArr[j] = letterArr[j].join("");
            }
        }

    }
    for (const curLetterWord of letterArr) {
        for (const curGivenWord of givenWords) {
            if (curGivenWord.length == curLetterWord.length) {
                letter = letter.replace(curLetterWord, curGivenWord);
                break;
            }
        }
    }
    console.log(letter);
}
hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so  _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.', ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);