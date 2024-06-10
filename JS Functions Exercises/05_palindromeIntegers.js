function solve(arr) {
    function checkIfPalindrome(num) {
        let numString = String(num);
        let palindrome = "";
        for (let i = numString.length - 1; i >= 0; i--) {
            let curNum = numString[i];
            palindrome += curNum;
        }
        if (numString === palindrome) {
            return true;
        }
        else {
            return false;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        let curNum = String(arr[i]);
        if (checkIfPalindrome(curNum)) {
            console.log("true");
        }
        else {
            console.log("false");
        }
    }
}
solve([123, 323, 421, 121]);