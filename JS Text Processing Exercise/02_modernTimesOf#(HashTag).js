function modernTimesOfHashTag(string) {
    let arr = string.split(" ").filter(word => word.includes("#") && word.length > 1);
    for (const curEl of arr) {
        let isSpecial = true;
        let specialWord = curEl.substring(1);
        for (const curChar of specialWord) {
            if (!((curChar.charCodeAt() >= 65 && curChar.charCodeAt() <= 90) || (curChar.charCodeAt() >= 97 && curChar.charCodeAt() <= 122))) {
                isSpecial = false;
            }
        }
        if (isSpecial) {
            console.log(specialWord);
        }
    }
}
modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');