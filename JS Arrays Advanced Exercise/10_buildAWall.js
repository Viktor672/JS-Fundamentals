function solve(arr) {
    let isWorkerRelieved = arr.filter(x => x < 30);
    let numberOfWorkers = isWorkerRelieved.length;
    totalSum = 0;
    let sumForTheDayContainer = [];
    while (numberOfWorkers > 0) {
        let sumForTheDay = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 30) {
                arr[i]++;
                sumForTheDay += 195;
                if (arr[i] >= 30) {
                    numberOfWorkers--;
                }
            }
        }
        sumForTheDayContainer.push(sumForTheDay);
        totalSum += sumForTheDay;
    }
    console.log(sumForTheDayContainer.join(", "));
    console.log(`${totalSum * 1900} pesos`);
}
solve([17, 22, 17, 19,

    17]);