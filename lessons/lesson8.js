// Declarative functions - Allows Function call before Declaration (helloOne() can be before the function code)
helloOne()

function helloOne() {
    console.log('Hello One')
}


// Anonymous function - Does NOT allow Function call before Declaration
var any = function(){
    console.log("Anonymous function")
}
any()

// ES6 function syntax or arrow function - Does NOT allow Function call before Declaration
var arrowFn = () => {
    console.log("Arrow function")
}
arrowFn()

// Function with arguments
function printName(firstName, lastName) {
    console.log(`Good Job ${firstName} ${lastName}`)
}
printName("Karuna", "karan")

// Function with return value
function multiplyByTwo(number) {
    var result = number * 2
    return result
}
console.log(multiplyByTwo(5))

// Import function
import {printAge} from '../helpers/printHelper.js'
printAge(40)

// import everything
import * as helper from '../helpers/printHelper.js'
helper.printAge(25)