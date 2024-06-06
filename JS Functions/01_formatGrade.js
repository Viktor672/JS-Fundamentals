function solve(grade) {
    let whatIsTheGrade = "";
    if (grade >= 2 && grade < 3) {
        whatIsTheGrade = "Fail";
    }
    else if (grade >= 3 && grade < 3.5) {
        whatIsTheGrade = "Poor";
    }
    else if (grade >= 3.5 && grade < 4.5) {
        whatIsTheGrade = "Good";
    }
    else if (grade >= 4.5 && grade < 5.5) {
        whatIsTheGrade = "Very good";
    }
    else {
        whatIsTheGrade = "Excellent";
    }
    if (whatIsTheGrade === 'Fail') {
        console.log(`${whatIsTheGrade} (2)`);
    }
    else {
        console.log(`${whatIsTheGrade} (${grade.toFixed(2)})`);
    }
}
solve(3.3)
