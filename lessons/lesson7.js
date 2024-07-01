// loops

for(var count=0; count<5; count++) {
    console.log('Hello Karun! '+ count)
}

var cars = ["Swift", "Toyota", "Maruti"]

// ES5 syntax - for of loop
for (const car of cars) {
    console.log(car)
    if (car == 'Toyota') {
        break
    }
}

// ES6 syntax - for each loop
cars.forEach(car => {
    console.log(car)
})