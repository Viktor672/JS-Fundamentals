function companyUsers(arr) {
    let companyObj = {};
    for (const curEl of arr) {
        let [company, employeeId] = curEl.split(" -> ");
        if (company in companyObj) {
            if (!companyObj[company].includes(employeeId)) {
                companyObj[company].push(employeeId);
            }
        }
        else {
            companyObj[company] = [employeeId];
        }
    }
    let companyTuples = Object.entries(companyObj);
    companyTuples.sort((a, b) => a[0].localeCompare(b[0]));
    for (const curEl of companyTuples) {
        console.log(curEl[0]);
        for (const curEmployeeId of curEl[1]) {
            console.log(`-- ${curEmployeeId}`);
        }
    }
}
companyUsers(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345' ])