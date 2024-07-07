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

//FILTER
// Filter Short Words:
// Write a function filterShortWords that takes an array of strings and returns a new array with only the strings that have more than 3 characters.Test filterShortWords with ['cat', 'elephant', 'dog', 'lion'].

// function filterShortWords(words) {
//     return words.filter((word) => {
//         words.length > 3
//     })
// }

// const wordsArray = ['cat', 'elephant', 'dog', 'lion']
// const results = filterShortWords(wordsArray)

// console.log(results)


// Filter Positive Numbers:
// Write a function filterPositiveNumbers that takes an array of numbers and returns a new array with only the positive numbers.Test filterPositiveNumbers with [-1, 2, -3, 4, -5, 6].

// function filterPositiveNumbers(num) {
//     return num.filter((nums) => {
//         return nums >= 0
//     })
// }

// const num = [-1, 2, -3, 4, -5, 6]
// const output = filterPositiveNumbers(num)

// console.log(output)

// Filter Adults:
// Write a function filterAdults that takes an array of objects with a property age and returns a new array with only the objects where age is 18 or older.Test filterAdults with [{name: 'Alice', age: 17}, {name: 'Bob', age: 20}, {name: 'Charlie', age: 15}].

// const adults = [{ name: 'Alice', age: 17 },
// {
//     name: 'Bob',
//     age: 20
// },
// {
//     name: 'Charlie',
//     age: 15
// },
// {
//     name: 'namxang',
//     age: 23
// }]

// function filterAdults(adults) {
//     return adults.filter((obj) => {
//         return obj.age >= 18
//     })
// }

// const age = filterAdults(adults)
// console.log(age)


//REDUCE
// Sum of Squares:
// Write a function sumOfSquares that takes an array of numbers and returns the sum of their squares.Test sumOfSquares with [1, 2, 3, 4].

// const numbs = [1, 2, 3, 4]

// function sumOfSquares(numbs) {
//     return numbs.reduce((acc, num) => {
//         return num * num + acc
//     }, 0)
// }

// const sum = sumOfSquares(numbs)
// console.log(sum)


// Concatenate Strings:
// Write a function concatenateStrings that takes an array of strings and returns a single string that is the concatenation of all the strings in the array.Test concatenateStrings with ['Hello', ' ', 'World', '!'].









// Count Occurrences:
// Write a function countOccurrences that takes an array of strings and returns an object where the keys are the strings and the values are the number of times each string appears in the array.Test countOccurrences with ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'].


const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']

function countOccurrences(fruits) {
    return fruits.reduce((acc, str) => {
        acc[str] = (acc[str] || 0) + 1
        return acc
    }, {})
}

const output = countOccurrences(fruits)
console.log(output)


//Combined usage of Map(), Filter(),Reduce()
// Calculate Total Sales:
// Write a function totalSales that takes an array of objects with properties product and amount and returns the total amount.Test totalSales with [{product: 'A', amount: 30}, {product: 'B', amount: 20}, {product: 'A', amount: 50}].







// Average of Even Numbers:
// Write a function averageEvenNumbers that takes an array of numbers, filters out the odd numbers, and returns the average of the remaining even numbers.Test averageEvenNumbers with [1, 2, 3, 4, 5, 6].








// Longest Word:
// Write a function longestWord that takes an array of strings and returns the longest string in the array.Test longestWord with ['cat', 'elephant', 'dog', 'hippopotamus'].