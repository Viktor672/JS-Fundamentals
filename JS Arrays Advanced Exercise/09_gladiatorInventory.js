function solve(arr) {
    let inventory=arr.shift().split(" ");
    for(let i=0;i<arr.length;i++){
        let tokens=arr[i].split(" ");
        let command=tokens.shift();
        let equipment=tokens.shift();
        if(command==="Buy"){
            if(!inventory.includes(equipment)){
                inventory.push(equipment);
            }
        }
        else if(command==="Trash"){
            if(inventory.includes(equipment)){
                let indexOf=inventory.indexOf(equipment);
                inventory.splice(indexOf,1);
            }
        }
        else if(command==="Repair"){
            if(inventory.includes(equipment)){
                let indexOf=inventory.indexOf(equipment);
                inventory.splice(indexOf,1);
                inventory.push(equipment);
            }
        }
        else if(command==="Upgrade"){
            let upgradedEquipmentArr=equipment.split("-");
            if(inventory.includes(upgradedEquipmentArr[0])){
            let indexOf= inventory.indexOf(upgradedEquipmentArr[0]);
            inventory.splice(indexOf+1,0,`${upgradedEquipmentArr[0]}:${upgradedEquipmentArr[1]}`);
            }
        }
    }
    console.log(inventory.join(" "));
}
solve(['SWORD Shield Spear',
    
    'Buy Bag',
    
    'Trash Shield',
    
    'Repair Spear',
    
    'Upgrade SWORD-Steel']);