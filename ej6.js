function calculateAverageAge(people){
    return  totalAge = people.reduce((sum, person) => sum + person.age, 0) / people.length;
}


const people = [
     { name: "Juan", age: 25 },
     { name: "Carla", age: 30 },
     { name: "Lucia", age: 35 },
     { name: "El Chengue", age: 49 }
   ];
console.log(calculateAverageAge(people)); 