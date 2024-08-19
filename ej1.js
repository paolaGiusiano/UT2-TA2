function getTotal(inventory) {
    return inventory.reduce((acc, e) => acc + e.price * Number(e.quantity), 0);
}

let inventory = [{article: '🍔', price: 15, quantity: '1'}, {article: '🍟', price: 10, quantity: '2'}];
console.log(`Total: ${getTotal(inventory)}`);