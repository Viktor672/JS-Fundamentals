function countStringOccurrences(string, word) {
    let count = 0;
    let stringArr = string.split(" ");
    for (const curEl of stringArr) {
        if (curEl == word) {
            count++;
        }
    }
    console.log(count);
}
countStringOccurrences('This is a word and it also is a sentence',

    'is');