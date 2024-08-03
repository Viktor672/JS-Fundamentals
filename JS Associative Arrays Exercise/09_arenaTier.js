function arenaTier(arr) {
    let gladiatorObj = {};
    let command = arr.shift();
    while (command != "Ave Cesar") {
        if (command.includes("->")) {
            let tokens = command.split(" -> ");
            let [gladiator, technique, skill] = tokens;
            skill = Number(skill);
            if (gladiator in gladiatorObj) {
                if (technique in gladiatorObj[gladiator]) {
                    if (gladiatorObj[gladiator].technique < skill) {
                        gladiatorObj[gladiator].technique = skill;
                    }
                }
                else {
                    gladiatorObj[gladiator][technique] = skill;
                }                                                                        //possible error
            }
            else {
                gladiatorObj[gladiator] = {};
                gladiatorObj[gladiator][technique] = skill;
            }
        }
        else {
            let tokens = command.split(" vs ");
            let firstGlad = tokens.shift();
            let secondGlad = tokens.shift();
            let hasTechniqueInCommon = false;
            if (firstGlad in gladiatorObj && secondGlad in gladiatorObj) {
                for (const technique in gladiatorObj[firstGlad]) {
                    if (technique in gladiatorObj[secondGlad]) {
                        hasTechniqueInCommon = true;
                    }
                    if (hasTechniqueInCommon) {
                        if (gladiatorObj[firstGlad][technique] > gladiatorObj[secondGlad][technique]) {
                            delete gladiatorObj[secondGlad];
                        }
                        else if (gladiatorObj[firstGlad][technique] < gladiatorObj[secondGlad][technique]) {
                            delete gladiatorObj[firstGlad];
                        }
                        break;
                    }
                }
            }
        }
        command = arr.shift();
    }
    let tuples = Object.entries(gladiatorObj);
    tuples.map(el => {
        let totalSkill = Object.values(el[1]).reduce((acc, value) => acc + value, 0);
        return el[2] = totalSkill;
    })
    tuples.sort((a, b) => b[2] - a[2] || a[0].localeCompare(b[0]));
    for (const curEl of tuples) {
        console.log(`${curEl[0]}: ${curEl[2]} skill`);
        let valuesTuples = Object.entries(curEl[1]);
        valuesTuples.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
        for (const curTech of valuesTuples) {
            console.log(` - ${curTech[0]} <!> ${curTech[1]}`);
        }
    }
}
arenaTier([
    'Pesho -> BattleCry -> 400',
    'Gosho -> PowerPunch -> 300',
    'Stamat -> Duck -> 200',
    'Stamat -> Tiger -> 250',
    'Ave Cesar']);
