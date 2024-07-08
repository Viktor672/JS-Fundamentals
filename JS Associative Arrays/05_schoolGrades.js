function schoolGrades(arr) {
    let gradeObj = {};
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(" ");
        let name = tokens.shift();
        let grades = tokens.map((x) => x = Number(x));
        if (gradeObj.hasOwnProperty(name)) {
            let oldGrades = gradeObj[name];
            oldGrades.forEach(grade => grades.push(grade));

        }
        gradeObj[name] = grades;
    }
    let tuples = Object.entries(gradeObj);
    tuples.sort(([key1], [key2]) => {
        return key1.localeCompare(key2);
    })
    for (let i = 0; i < tuples.length; i++) {
        let count = 0;
        let sum = 0;
        let averageGrade = 0;
        let grades = tuples[i][1];
        for (let j = 0; j < grades.length; j++) {
            sum += grades[j];
            count++;
        }
        averageGrade = sum / count;
        tuples[i][1] = averageGrade.toFixed(2);
    }
    for (const curEl of tuples) {
        console.log(`${curEl[0]}: ${curEl[1]}`);
    }
}

