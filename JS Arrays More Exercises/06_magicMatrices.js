function solve(matrix) {
    let isMagic = true;
    let reduce = (previous, current) => previous + current;
    let sum = matrix[0].reduce(reduce);
    for (let rows = 0; rows < matrix.length; rows++) {
        let rowsSum = 0;
        rowsSum += matrix[rows].reduce(reduce);
        if (rowsSum != sum) {
            isMagic = false;
            break;
        }
        if (rows === 0) {
            for (let i = 0; i < matrix[rows].length; i++) {
                let colsSum = 0;
                for (let cols = 0; cols < matrix.length; cols++) {
                    colsSum += matrix[cols][i];
                }
                if (colsSum != sum) {
                    isMagic = false;
                    break;
                }
            }
        }
    }
    console.log(isMagic);
}
solve([[4, 5, 6],

[6, 5, 4],

[5, 5, 5]]);