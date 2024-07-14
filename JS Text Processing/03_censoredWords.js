function censoredWords(string, word) {
    let toReplace = "*".repeat(word.length);
    while (string.includes(word)) {
        string = string.replace(word, toReplace);
    }
    console.log(string);
}
censoredWords('A small sentence with some words',

    'small');