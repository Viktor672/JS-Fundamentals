function solve(string, counter) {
    function count(string, counter) {
        let text = "";
        for (let i = 1; i <= counter; i++) {
            text += string;
        }
        return text;
    }
    console.log(count(string, counter));
}
solve("abc", 3);