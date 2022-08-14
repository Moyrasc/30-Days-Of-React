// 1º Create an empty object called dog
const dogs = {}
// 2º Print the the dog object on the console
console.log(dogs)

// 3º Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
const dog = {
    name:'Baloo',
    color:'Brown',
    legs: '4',
    age: 2,
    bark: 'wooof wooof'
  }

// 4º Get name, legs, color, age and bark value from the dog object
console.log(`My dog name is ${dog.name}, it has ${dog.legs} legs, it has ${dog.age} old , has color ${dog.color} and its bark sounds ${dog.bark}`)
// 5º Set new properties the dog object: breed, getDogInfo
dog.breed = 'mastiff';
