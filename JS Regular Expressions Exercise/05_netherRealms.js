function netherRealms(string) {
    let arr = string.split(",");
    let monsterArr = arr.map(element => element.trim());
    monsterArr.sort((a, b) => a.localeCompare(b))
    let healthPattern = /[^0-9\+\-\*\/\.]/g;
    let damageNumPattern = /-?\d+\.?\d*/g;
    let damageCharPattern = /[\/*]/g;
    for (const curMonster of monsterArr) {
        let health = 0;
        let damage = 0;
        let healthMatches = curMonster.match(healthPattern);
        if (healthMatches) {
            for (const curChar of healthMatches) {
                health += curChar.charCodeAt();
            }
        }
        let damageNumMatches = curMonster.match(damageNumPattern);
        if (damageNumMatches) {
            for (const curNum of damageNumMatches) {
                damage += Number(curNum);
            }
        }
        let damageCharMathces = curMonster.match(damageCharPattern);
        if (damageCharMathces) {
            for (const curChar of damageCharMathces) {
                if (curChar === "*") {
                    damage *= 2;
                }
                else if (curChar === "/") {
                    damage /= 2;
                }
            }
        }
        console.log(`${curMonster} - ${health} health, ${damage.toFixed(2)} damage`);
    }
}
netherRealms('M3ph1st0**, Azazel');