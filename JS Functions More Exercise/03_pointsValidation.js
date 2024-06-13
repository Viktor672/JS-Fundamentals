function solve(arr) {
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];
    function checkingDistance(x1, y1, x2, y2) {
        let distanceX = x2 - x1;
        let distanceY = y2 - y1;
        let totalDistance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
        if (totalDistance % 1 === 0) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        }
        else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
    checkingDistance(x1, y1, 0, 0);
    checkingDistance(x2, y2, 0, 0);
    checkingDistance(x1, y1, x2, y2);
}
solve([2, 1, 1, 1])