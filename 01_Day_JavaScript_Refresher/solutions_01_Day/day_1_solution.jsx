 // 1º Declare an empty array;
  let arr = []
  // 2º Declare an array with more than 5 number of elements
  let numbers = [3,6,4,2,7,1,8]
  // 3º Find the length of your array
  console.log(numbers.length) // 7
 // 4º Get the first item, the middle item and the last item of the array
  firstItem = numbers[0]
  console.log(firstItem) // 3
  
  middleItem = numbers[3] // 2
  console.log(middleItem)

  lastItemIndex = numbers.length-1
  lastItem = numbers[lastItemIndex]
  console.log(lastItem) // 8
  // 5º Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
  mixedDataTypes = ["Hello",34,{name:"Tom", age: 22},true , "Baloo", 125]
  console.log(mixedDataTypes.length) // 6

  // 6º Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
  let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
  // 7º Print the array using console.log()
  console.log(itCompanies) // (7) ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
  // 8º Print the number of companies in the array

  // 9º Print the first company, middle and last company
  firstCompany = itCompanies[0] // Facebook
  middleCompany = itCompanies[3] // Apple
  lastCompanyIndex = itCompanies.length-1
  lastCompany = itCompanies[lastCompanyIndex] // Amazon

  //10º Print out each company

  // 11º Change each company name to uppercase one by one and print them out
  // 12º Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.