// objects 

var customer = {
    firstName: 'Ramya',
    lastName: 'Ravindran'
}
console.log(customer)
console.log(customer.firstName) // Access property using Dot Notation
console.log(customer.lastName)
console.log(customer['firstName']) // Access property using Bracket Notation
console.log(customer["lastName"])
customer['firstName'] = "Papa"
customer.lastName = "Jothimani"
console.log(customer.firstName +" "+ customer['lastName']) // Concatenation
console.log(`${customer.firstName} ${customer['lastName']}`) // Intepolation

// arrays
var cars = ["Swift", "Toyota", "Maruti"]
console.log(cars)
console.log(cars[0])
console.log(cars[1])
console.log(cars[2])
cars[2] = "Tesla"
console.log(cars[2])
console.log(cars)

// objects & arrays
var person = {
    firstName: 'Ramya',
    lastName: 'Ravindran',
    cars: ["Ford", "Audi", "BMW"]
}
console.log(person.cars[0])
console.log(person.cars)