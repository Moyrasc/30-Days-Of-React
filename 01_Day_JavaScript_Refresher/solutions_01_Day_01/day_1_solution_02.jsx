// 1º Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file
import {countries} from './countries.js'
import {web_techs} from './web_techs.js'
// 2º First remove all the punctuations and change the string to array and count the number of words in the array
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words)
console.log(words.length)
["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

let words = text.split(" ")
console.log(words)
console.log(words.length)
// 3º In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// - add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift("Meat")
// - add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push("Sugar")
// - remove 'Honey' if you are allergic to honey
shoppingCart.splice(4,1)
//  -modify Tea to 'Green Tea'
shoppingCart[2] = 'Green Tea';
// 4º In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
let Ethio = countries.includes('Ethiopia')
Ethio ? (console.log('ETHIOPIA')) : countries.push('Ethiopia')
// 5º In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
webTechs.includes('Sass') ? console.log('Sass is a CSS preprocess') : webTechs.push('Sass') && console.log(webTechs);
// 6º Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

console.log(fullStack)
["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

let fullStack = frontEnd.concat(backEnd)
console.log(fullStack)