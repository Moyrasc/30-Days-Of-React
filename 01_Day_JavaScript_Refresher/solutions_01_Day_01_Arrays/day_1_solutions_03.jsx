// 1º The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] 
// - Sort the array and find the min and max age 
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] 
ages.sort((a,b)=>a-b) // min 19- max 26

// - Find the median age(one middle item or two middle items divided by two) 
agesMedianIdx = (ages.length - 1) / 2;
// - Find the average age(all items divided by number of items)
let totalAge = 0;
ages.forEach(age => {
  totalAge += age;
});
const avgAge = totalAge / ages.length;
// - Find the range of the ages(max minus min) 
const minAge = Math.min(...ages);
const maxAge = Math.max(...ages);
console.log("Range of the ages: " + (maxAge - minAge));
// - Compare the value of (min - average) and (max - average), use abs() method
console.log(Math.abs(minAge - avgAge));
console.log(Math.abs(maxAge - avgAge));
// 2º .Slice the first ten countries from the countries array
countries.slice(0,10)
// 3º Find the middle country(ies) in the countries array
let middleIndex = Math.floor(countries.lenght/2)

// 4º Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let firstHalfCountries = [];
let secondHalfCountries = [];
for (let i = 0; i < countries.length; i++) {
  const con = countries[i];
  if (i <= countryMid) { firstHalfCountries.push(con);}
  else { secondHalfCountries.push(con); }

}
console.log("first half" + firstHalfCountries)
console.log("second half" + secondHalfCountries)