function countBanana(inventory){
    return inventory.filter(item => item == '🍌').length;
}

let inventory = ['🥑','🍌','🥭', '🍌'];
console.log(countBanana(inventory));
