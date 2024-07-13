// function legendaryFarming(str) {
//     let arr = str.split(" ");
//     let keyMaterialObj = {
//         "shards": 0,
//         "fragments": 0,
//         "motes": 0
//     }
//     let junkMaterialObj = {};
//     for (let i = 0; i < arr.length; i += 2) {
//         let quantity = Number(arr[i]);
//         let material = arr[i + 1].toLowerCase();
//         if (keyMaterialObj.hasOwnProperty(material)) {
//             keyMaterialObj[material] += quantity;
//             if (keyMaterialObj[material] >= 250) {
//                 keyMaterialObj[material] -= 250;
//                 let keys = Object.keys(keyMaterialObj);
//                 if (keys[0] == material) {
//                     console.log("Shadowmourne obtained!");
//                 }
//                 else if (keys[1] == material) {
//                     console.log(`Valanyr obtained!`);
//                 }
//                 else if (keys[2] == material) {
//                     console.log("Dragonwrath obtained!");
//                 }
//                 break;
//             }
//         }
//         else if (junkMaterialObj.hasOwnProperty(material)) {
//             junkMaterialObj[material] += quantity
//         }
//         else {
//             junkMaterialObj[material] = quantity;
//         }
//     }
//     let keyObjTuples = Object.entries(keyMaterialObj);
//     keyObjTuples.sort((a, b) => (b[1] - a[1]) || a[0].localeCompare(b[0]));
//     for (const [material, quantity] of keyObjTuples) {
//         console.log(`${material}: ${quantity}`);
//     }
//     let junkObjTuples = Object.entries(junkMaterialObj);
//     junkObjTuples.sort(([key1], [key2]) => key1.localeCompare(key2));
//     for (const [material, quantity] of junkObjTuples) {
//         console.log(`${material}: ${quantity}`);
//     }
// }


function legendaryFarming(str) {
    let arr = str.split(" ");
    let keyMaterialObj = {
        "shards": 0,
        "fragments": 0,
        "motes": 0
    }
    let legendariesObj = {
        "shards": "Shadowmourne",
        "fragments": "Valanyr",
        "motes": "Dragonwrath"
    }
    let junkMaterialObj = {};
    for (let i = 0; i < arr.length; i += 2) {
        let quantity = Number(arr[i]);
        let material = arr[i + 1].toLowerCase();
        if (keyMaterialObj.hasOwnProperty(material)) {
            keyMaterialObj[material] += quantity;
            if (keyMaterialObj[material] >= 250) {
                keyMaterialObj[material] -= 250;
                console.log(`${legendariesObj[material]} obtained!`);
                break;
            }
        }
        else if (junkMaterialObj.hasOwnProperty(material)) {
            junkMaterialObj[material] += quantity
        }
        else {
            junkMaterialObj[material] = quantity;
        }
    }
    let keyObjTuples = Object.entries(keyMaterialObj);
    keyObjTuples.sort((a, b) => (b[1] - a[1]) || a[0].localeCompare(b[0]));
    for (const [material, quantity] of keyObjTuples) {
        console.log(`${material}: ${quantity}`);
    }
    let junkObjTuples = Object.entries(junkMaterialObj);
    junkObjTuples.sort(([key1], [key2]) => key1.localeCompare(key2));
    for (const [material, quantity] of junkObjTuples) {
        console.log(`${material}: ${quantity}`);
    }
}
