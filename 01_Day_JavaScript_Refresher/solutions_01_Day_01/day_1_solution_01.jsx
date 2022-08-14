// 1º Declare an empty array;
let arr = []
// 2º Declare an array with more than 5 number of elements
let numbers = [3, 6, 4, 2, 7, 1, 8]
// 3º Find the length of your array
console.log(numbers.length) // 7
// 4º Get the first item, the middle item and the last item of the array
firstItem = numbers[0]// 3
middleItem = numbers[3] // 2
lastItemIndex = numbers.length - 1
lastItem = numbers[lastItemIndex] // 8
// 5º Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
mixedDataTypes = ["Hello", 34, { name: "Tom", age: 22 }, true, "Baloo", 125]
console.log(mixedDataTypes.length) // 6
// 6º Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
// 7º Print the array using console.log()
console.log(itCompanies) // ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// 8º Print the number of companies in the array
console.log(itCompanies.length)
// 9º Print the first company, middle and last company
firstCompany = itCompanies[0] // Facebook
middleCompany = itCompanies[3] // Apple
lastCompanyIndex = itCompanies.length - 1
lastCompany = itCompanies[lastCompanyIndex] // Amazon
//10º Print out each company
console.log(itCompanies)
// 11º Change each company name to uppercase one by one and print them out
let itCompaniesStr = itCompanies.toString()
let itCompaniesUpper = itCompaniesStr.toUpperCase()
// 12º Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(', ') + ' are big IT companies.')
// 13º Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
itCompanies.includes('Adidas')?"Adidas exists":"Company is not found"
// 14º Filter out companies which have more than one 'o' without the filter method

// 15º Sort the array using sort() method
itCompanies.sort() // (7) ['Amazon', 'Apple', 'Facebook', 'Google', 'IBM', 'Microsoft', 'Oracle']
// 16º Reverse the array using reverse() method
itCompanies.reverse() // (7) ['Amazon', 'Oracle', 'IBM', 'Apple', 'Microsoft', 'Google', 'Facebook']
// 17º Slice out the first 3 companies from the array
itCompanies.slice(0, 3) // (3) ['Facebook', 'Google', 'Microsoft']
// 18º Slice out the last 3 companies from the array
itCompanies.slice(0, 4) // (4) ['Facebook', 'Google', 'Microsoft', 'Apple']
// 19º Slice out the middle IT company or companies from the array
itCompanies.splice(3,1)
// 20º Remove the first IT company from the array
itCompanies.shift() // (6) ['Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// 21º Remove the middle IT company or companies from the array
itCompanies.splice(3,3)
// 22º Remove the last IT company from the array
itCompanies.pop() // (6) ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle']
// 23º Remove all IT companies
itCompanies.splice() // []