function replaceRepeatingChars(string) {
    let result = '';
    let curChar = '';
    for (const curLetter of string) {
        if (curLetter != curChar) {
            result += curLetter;
            curChar = curLetter
        }
    }
    console.log(result);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');