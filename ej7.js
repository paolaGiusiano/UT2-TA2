function  combinedHobbies(persons){
    return persons.map(p => p.hobbies);
}


const persons = [
    {
       name: 'Paula',
       hobbies: ['reading 📚', 'gardening 🌱', 'painting 🎨']
     },
     {
       name: 'Martin',
       hobbies: ['cycling 🚴', 'cooking 🍳', 'hiking 🥾']
     },
     {
       name: 'Juan',
       hobbies: ['photography 📸', 'traveling ✈️', 'swimming 🏊‍♂️']
     },
     {
       name: 'Veronica',
       hobbies: ['dancing 💃', 'singing 🎤', 'running 🏃‍♀️']
     }
   ];

   console.log(combinedHobbies(persons));
