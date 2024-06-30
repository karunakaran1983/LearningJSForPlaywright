// Concatenation & Interpolation
var price = 50
var itemName = "Cup"
var messageToPrint = "The price for your " + itemName + " is "+ price + " dollars" // Concatenation
console.log(messageToPrint)
price = 400
itemName = "Perfume"
messageToPrint = "The price for your " + itemName + " is "+ price + " dollars" // Concatenation
console.log(messageToPrint)
price = 1000
itemName = "Vacuum"
var messageToPrint = `The price for your ${itemName} is ${price} dollars` // Interpolation
console.log(messageToPrint)

