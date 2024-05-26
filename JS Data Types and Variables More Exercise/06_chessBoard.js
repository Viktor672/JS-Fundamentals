function solve(n) {
    let currentColor = "black";
    let previousColor = "";
    console.log('<div class="chessboard">');
    for (let rows = 0; rows < n; rows++) {
        console.log(`  <div>`);
        for (let colums = 0; colums < n; colums++) {
            console.log(`    <span class="${currentColor}"></span>`);
            previousColor = currentColor;
            if (previousColor === "black") {
                currentColor = "white";
            }
            else {
                currentColor = "black";
            }
        }
        console.log(`  </div>`);
        if (n % 2 === 0) {
            previousColor = currentColor;
            if (previousColor === "black") {
                currentColor = "white";
            }
            else {
                currentColor = "black";
            }
        }
    }
    console.log('</div>');
}
solve(6);