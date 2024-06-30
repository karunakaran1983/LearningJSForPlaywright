
var customerFirstName = "John"
var customerLastName = "Smith"
var customerAge = 25

// customerFirstName = 100 //TS throws error

var employeeFirstName:string = "Tom" // datatype can be added to the variable name
var employeeLastName:string = "Ford"
var employeeAge:number = 40

type Customer = { firstName: string, lastName: string, active: boolean}

// All the properties in the Customer should be added to the object
var firstCustomer: Customer = {
    firstName: "Sim",
    lastName: "Jim",
    active: true 
    // occupation: "HR" // Other than Customer properties, we cant add anything
}