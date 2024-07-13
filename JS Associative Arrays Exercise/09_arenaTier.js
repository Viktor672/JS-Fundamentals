function arenaTier(arr) {
    let arenaObj = {};

    let action = arr.shift();

    while (action !== "Ave Cesar") {
        if (action.includes(" -> ")) {
            const [gladiator, technique, skill] = action.split(" -> ");

            if (!arenaObj.hasOwnProperty(gladiator)) {
                arenaObj[gladiator] = {};
            }

            if (!arenaObj[gladiator].hasOwnProperty(technique)) {
                arenaObj[gladiator][technique] = 0;
            }

            arenaObj[gladiator][technique] = Math.max(arenaObj[gladiator][technique], Number(skill));

        } else {
            const [firstGlad, secondGlad] = action.split(" vs ");
            if (arenaObj.hasOwnProperty(firstGlad) && arenaObj.hasOwnProperty(secondGlad)) {
                let commonTech = false;

                for (const technique in arenaObj[firstGlad]) {
                    if (arenaObj[secondGlad].hasOwnProperty(technique)) {
                        commonTech = true;
                        if (arenaObj[firstGlad][technique] > arenaObj[secondGlad][technique]) {
                            delete arenaObj[secondGlad];
                        } else if (arenaObj[firstGlad][technique] < arenaObj[secondGlad][technique]) {
                            delete arenaObj[firstGlad];
                        }
                        break;
                    }
                }
            }
        }

        action = arr.shift();
    }

    const entries = Object.entries(arenaObj).map(([gladiator, skills]) => {
        const totalSkill = Object.values(skills).reduce((acc, skill) => acc + skill, 0);
        return { gladiator, skills, totalSkill };
    });

    entries.sort((a, b) => b.totalSkill - a.totalSkill || a.gladiator.localeCompare(b.gladiator));

    for (const { gladiator, skills, totalSkill } of entries) {
        console.log(`${gladiator}: ${totalSkill} skill`);

        Object.entries(skills)
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
            .forEach(([technique, skill]) => {
                console.log(`- ${technique} <!> ${skill}`);
            });
    }
}

arenaTier(['Peter -> BattleCry -> 400', 'Alex -> PowerPunch -> 300', 'Stefan -> Duck -> 200', 'Stefan -> Tiger -> 250', 'Ave Cesar']);