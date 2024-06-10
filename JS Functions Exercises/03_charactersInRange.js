function solve(char1, char2) {
    let char1AsAscii = char1.charCodeAt();
    let char2AsAscii = char2.charCodeAt();
    let result = "";
    if (char1AsAscii < char2AsAscii) {
        for (let i = char1AsAscii + 1; i < char2AsAscii; i++) {
            let charString = String.fromCharCode(i);
            result += `${charString} `;
        }
    }
    else {
        for (let i = char2AsAscii + 1; i < char1AsAscii; i++) {
            let charString = String.fromCharCode(i);
            result += `${charString} `;
        }
    }
    console.log(result);
}
solve('C',

    '#');