function pascalCaseSplitter(pascalCasestring) {
    let resultArr = [];
    let string = `${pascalCasestring[0]}`;
    pascalCasestring = pascalCasestring.substring(1);
    let charCount = 0;
    for (const curChar of pascalCasestring) {
        if (!(curChar.charCodeAt() >= 97 && curChar.charCodeAt() <= 122)) {
            resultArr.push(string);
            string = `${curChar}`;
            charCount++;
        }
        if (curChar.charCodeAt() >= 97 && curChar.charCodeAt() <= 122) {
            string += curChar;
            charCount++;
        }
        if (charCount == pascalCasestring.length) {
            resultArr.push(string);
        }
    }
    console.log(resultArr.join(", "));
}
pascalCaseSplitter('ThisIsSoAnnoyingToDo');