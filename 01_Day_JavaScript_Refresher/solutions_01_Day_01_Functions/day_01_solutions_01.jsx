// 1º Declare a function fullName and it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName,lastName){
    return `${firstName}${lastName}`
}

// 2º Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(num1,num2){
    return num1 + num2
}

// 3º Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates _areaOfCircle


// 4º Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
function convertCelciusToFahrenheit(temp){
    let fahrenheit=temp*1.8+32
    return fahrenheit
}
// 5º Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

// 6º Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.