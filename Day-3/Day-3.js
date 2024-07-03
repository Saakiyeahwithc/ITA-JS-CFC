//conditional operator,ternary operator, array function

// const isRaining = false
// if (isRaining) {
//     console.log("Carry umberlla")
// }
// else {
//     console.log("Don't carry umbrella")
// }

// const age = 21
// if(age>18){
//     console.log("can vote")
// }
// else{
//     console.log("cannot vote")
// }

// const age = 21    //duita equal to le datatype check gardeina, 3 ota equal to le datatype check garcha
// if (age == 21) {
//     console.log("age equals 21")
// }
// else {
//     console.log("not equals to 21")
// }


//ternary operator
//isRaining = true
// const result = isRaining ? "carry umbrella" : "Don't carry umbrella"
// console.log(result)

//shortcircuit- apersand vanda left ko value true cha vane matra run huncha natra hudeina
//isRaining && console.log("Carry Umbrella")


// const temp = 27
// if (temp > 30) {
//     console.log("Hot")
// }
// else if (temp > 20) {
//     console.log("Moderate")
// }
// else {
//     console.log("Cool")
// }


// const grade = 90
// if (grade >= 90){
//     console.log("A+")
// }
// else if (grade >= 80){
//     console.log("A")
// }
// else if(grade >= 70){
//     console.log("B+")
// }
// else if(grade >= 60){
//     console.log("B")
// }
// else {
//     console.log("Fail")
// }



//const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
// for (var i = 0; i < days.length; i++) {
//      console.log(days[i])
// }

// for(let abc of days){
//     console.log(abc)
// }

// const data = {
//     name: 'prashant',
//     age: 21,
//     address: 'Dharan'
// }

// for (let key in data) {
//     console.log(key + ':' + data[key])
// }


//function

// function add(a, b) {
//     console.log(a + b)
// }

// add(1,2)

//named regular function
// const add = function add(a, b) {
//     console.log(a + b)
// }

//arrow function
// const add = (a, b) => {
//     console.log(a + b)
// }
// add(3,4)

//anonymous function
// () => {
//     console.log('Hello World')
// }

//const numbers = [1, 2, 3, 4, 5]
//make a function that accepts numbers as array parameters and loops it using for of and prints it

// function n(numbers) {
//     for (let num of numbers) {
//         console.log(num)
//     }
// }

// n(numbers)

//function number(numbers) {
//     for (let num of numbers) {
//         console.log(num*num)
//     }
// }

// number(numbers)




// const data = {
//     status: 200,
//     message: "Code found",
//     code: [
//         {
//             _id: "668510da18d90581711b6292",
//             text: "test\n",
//             userId: "f959757",
//             title: "test",
//             ipAddress: "49.244.110.12",
//             createdAt: "2024-07-03T08:50:34.704Z"

//         }
//     ]
// }

// function fetch(data){
//     console.log(data.code[0].userId)
//     console.log(data.code[0].title)
//     console.log(data.code[0].ipAddress)
// }

// fetch(data)

// hi