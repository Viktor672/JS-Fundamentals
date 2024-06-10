function solve(string) {
    function checkIfRightLength(string) {
        if (string.length >= 6 && string.length <= 10) {
            return true;
        }
        else {
            console.log("Password must be between 6 and 10 characters");
            return false;
        }
    }
    function checkIfAlphaNumeric(string) {
        for (let i = 0; i < string.length; i++) {
            let curChar = string[i];
            curChar = curChar.charCodeAt();
            if (!(curChar >= 48 && curChar <= 57 || curChar >= 65 && curChar <= 90 || curChar >= 97 && curChar <= 122)) {
                console.log("Password must consist only of letters and digits");
                return false;
            }
        }
        return true;
    }
    function checkIfHas2NumsOrMore(string) {
        let counter = 0;
        for (let i = 0; i < string.length; i++) {
            let curChar = string[i];
            curChar = curChar.charCodeAt();
            if (curChar >= 48 && curChar <= 57) {
                counter++;
            }
            if (counter >= 2) {
                return true;
            }
        }
        console.log("Password must have at least 2 digits");
        return false;
    }
    let isRightLength = checkIfRightLength(string);
    let isAlphaNumeric = checkIfAlphaNumeric(string);
    let hasAtLeast2Nums = checkIfHas2NumsOrMore(string);
    if (isRightLength && isAlphaNumeric && hasAtLeast2Nums) {
        console.log("Password is valid");
    }

}
solve('Pa$s$s');