// logical AND operators
console.log(true && true) // all values have to be TRUE for expression to be TRUE
console.log(true && false)

// logical OR operators
console.log(true || true) // any value should be TRUE for the expression to be TRUE
console.log(true || false)
console.log(false || false)

// Example
var ageIsMoreThanEighteen = true
var isUSCitizen = true

var eligibilityForDriversLicense = ageIsMoreThanEighteen && isUSCitizen
console.log('This customer is eligible for DL: '+ eligibilityForDriversLicense)

// Logical NOT operator
console.log(!true)
console.log(6 == 10)
console.log(6 !== 10)