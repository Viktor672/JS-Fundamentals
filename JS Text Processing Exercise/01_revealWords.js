function revealWords(givenWords, sentence) {
    let givenWordsArr = givenWords.split(", ");
    let sentenceArr = sentence.split(" ");
    let templates = sentenceArr.filter(word => word.includes("*"));
    for (const template of templates) {
        for (const curWord of givenWordsArr) {
            if (curWord.length == template.length) {
                sentence = sentence.replace(template, curWord);
                break;
            }
        }
    }
    console.log(sentence);
}
revealWords('great, learning',

    'softuni is ***** place for ******** new programming languages');