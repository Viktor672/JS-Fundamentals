function passwordGenerator(arr) {
    let string1 = arr.shift();
    let string2 = arr.shift();
    let replacementWord = arr.shift();
    let concatenatedString = string1.concat(string2);
    let wordIndex = 0;
    let vowelsArr = ['a', 'o', 'u', 'e', 'i'];

    for (const curChar of concatenatedString) {
        if (vowelsArr.includes(curChar)) {
            concatenatedString = concatenatedString.replace(curChar, replacementWord[wordIndex].toUpperCase());
            wordIndex++;
        }
        if (wordIndex >= replacementWord.length) {
            wordIndex = 0;
        }
    }
    let concatenatedArr = Array.from(concatenatedString);
    let reversedConcatenatedString = [];
    for (let i = 0; i < concatenatedArr.length; i++) {
        reversedConcatenatedString.unshift(concatenatedArr[i]);
    }
    console.log(`Your generated password is ${reversedConcatenatedString.join("")}`);
}
passwordGenerator([

    'ilovepizza',

    'ihatevegetables',

    'orange'

]);