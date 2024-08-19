function findMax(numbers){
    return numbers.sort((a, b) => b - a)[0];
    //return Math.max(...numbers);
}

const numbers = [1, 2, 3, 4, 5];
console.log(findMax(numbers));