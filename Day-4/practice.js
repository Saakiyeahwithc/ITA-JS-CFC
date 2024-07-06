//practice questions for callback functions and higher order functions.

// Write a function 'repeat' that takes another function (fn) and a number "n", and calls (fn) exactly 'n' times.

// function repeat(fn, n) {
//     for (let i = 0; i < n; i++) {
//         fn()
//     }
// }

// Test function
// function sayHello() {
//     console.log("Hello")
// }

// // Test repeat function
// repeat(sayHello, 3)


// Write a function createAdder that takes a number x and returns a new function. The new function takes a number y and returns the sum of x and y.

// Test createAdder with x = 4 and y = 6.

// function createAdder(x) {
//     return function (y) {
//        return x + y
//     }
// }

// const addFour = createAdder(4)
// const result = addFour(6)

// console.log(result) 


// Map:Write a function incrementNumbers that takes an array of numbers and returns a new array with each number incremented by 1.Test incrementNumbers with [1, 2, 3, 4]

// const incrementNumbers = [1, 2, 3, 4]
// const newArray = []

// const addOne = incrementNumbers.map((obj) => {
//     return newArray.push(obj + 1)
// })
// console.log(newArray)

// Write a function toUpperCaseArray that takes an array of strings and returns a new array with each string converted to uppercase.Test toUpperCaseArray with ['hello', 'world'].

// const toUpperCaseArray = ["hello", "world"]
// const newArray = []

// const output = toUpperCaseArray.map((change) => {
//     return newArray.splice(0, 2, "HELLO", "WORLD")
// })
// console.log(newArray)


// Write a function extractAges that takes an array of objects with a property age and returns a new array with the ages.Test extractAges with [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}].

// const extractAges = [{
//     name: 'Alice',
//     age: 25
// },
// {
//     name: 'Bob',
//     age: 30
// }]

// const newArray = []

// const age = extractAges.map((obj) => {
//     return newArray.push(obj.age)

// })
// console.log(newArray);