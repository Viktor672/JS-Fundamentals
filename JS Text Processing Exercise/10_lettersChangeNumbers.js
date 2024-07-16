function lettersChangeNumbers(string) {
    let alphabetObj = { 'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9, 'J': 10, 'K': 11, 'L': 12, 'M': 13, 'N': 14, 'O': 15, 'P': 16, 'Q': 17, 'R': 18, 'S': 19, 'T': 20, 'U': 21, 'V': 22, 'W': 23, 'X': 24, 'Y': 25, 'Z': 26 };
    let arr = string.split(" ").filter(element => element.length > 0);
    let totalSum = 0;
    for (let curEl of arr) {
        let sum = 0;
        curEl = Array.from(curEl);
        let firstLetter = curEl.shift();
        let lastLetter = curEl.pop();
        curEl = curEl.join("");
        let number = Number(curEl);
        if (firstLetter.charCodeAt() >= 65 && firstLetter.charCodeAt() <= 90) {
            sum += number / alphabetObj[firstLetter];
        }
        else if (firstLetter.charCodeAt() >= 97 && firstLetter.charCodeAt() <= 122) {
            sum += number * alphabetObj[firstLetter.toUpperCase()];
        }
        if (lastLetter.charCodeAt() >= 65 && lastLetter.charCodeAt() <= 90) {
            sum -= alphabetObj[lastLetter];
        }
        else if (lastLetter.charCodeAt() >= 97 && lastLetter.charCodeAt() <= 122) {
            sum += alphabetObj[lastLetter.toUpperCase()];
        }
        totalSum += sum;
    }
    console.log(totalSum.toFixed(2));
}
lettersChangeNumbers('a1A');