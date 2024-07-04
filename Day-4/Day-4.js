//call back function
//that type of function jun chai arko function ma as argument vayera jancha
/*syntax:getSomething(function(){

})

getSomething(()=>{
    })*/

/*Higher order function(HOF)
foreach = loop ko lagi matra ho 
map = looping tara esma hami le data manipulate pani garnu milcha. orginal arry lai modify gardeina naya array banyera garcha 
reduce=
filter {array ko lagi matra kam garcha sabei hof le}*/

//const fruits = ['mango', 'banana', 'apple']

// fruits.map(function (fruit) {
//     console.log(fruit)
// })

// fruits.forEach(function(eat){
//     console.log(eat)
// }) 

//fruits.reduce(function(){})

// fruits.filter(function(){})



// const nums = [1, 2, 3, 4, 5]
// const sqnum = []
// nums.forEach(function (sq) {
//     sqnum.push(sq**2)
// })
// console.log(sqnum)

const data = [
    {
        firstname: "Prashant",
        lastname: "Shakya",
        Address: "Dharan"
    },
    {
        firstname: "Namxang",
        lastname: "Rai",
        Address: "Damak"
    },
    {
        firstname: "Winner",
        lastname: "Puma",
        Address: "Terathum"
    }
]

// data.forEach(function (add) {
//     console.log(add.firstname + ' ' + add.lastname)
// })

// data.forEach((add) => {
//     console.log(add.firstname + ' ' + add.lastname)
// })


// const num2 = [2, 4, 6, 8]
// const squared = num2.map((num) => {
//     return num ** 2
// })
// console.log(squared)


// const result = data.map((obj) => {
//     return {
//         fullname: obj.firstname + ' ' + obj.lastname
//     }
// })

// console.log(result)


// const num = [1, 2, 3, 4, 5]

// const output = num.map((obj) => {
//     return {
//         text: 'A',
//         number: obj
//     }
// })

// console.log(output)

//use of spread operator
// const result = data.map((obj) => {
//     return {
//         ...obj,
//         fullname: obj.firstname + " " + obj.lastname
//     }
// })

// console.log(result)

//filter HOF

// const numData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const oddNumber = numData.filter((num) => {
//     return num % 2 == 0
// })
// console.log(oddNumber)


// const books = [
//     {
//         title: "You can win",
//         author: 'shiv khera',
//         publishedAt: 2001
//     },
//     {
//         title: "Think like a monk",
//         author: 'Jay shetty',
//         publishedAt: 2022
//     },
//     {
//         title: "Cashflow quadrant",
//         author: 'Robert T. Kiyosaki',
//         publishedAt: 1909
//     },
//     {
//         title: "You can win2",
//         author: 'shiv khera',
//         publishedAt: 1990
//     },
//     {
//         title: "Think like a monk2",
//         author: 'Jay shetty',
//         publishedAt: 1999
//     },
//     {
//         title: "Cashflow quadrant2",
//         author: 'Robert T. Kiyosaki',
//         publishedAt: 2010
//     }
// ]

// const book = books.filter((obj) => {
//     return obj.publishedAt > 2000

// })
// console.log(book)

// const files = ['index.html', 'app.js', 'app.java', 'test.js']

// const app = files.filter((data) => {
//     return data.endsWith(".js")
// })
// console.log(app)


// const lasttask = [1, 2, 'null', 'undefined', 'prashant']
// const output = lasttask.filter((obj) => {
//     return obj !== null && obj !== undefined
// })
// console.log(output)

const datas = [
    {
        name: "Manish",
        marks: 800,
        status: "pass"
    },
    {
        name: "Anish",
        marks: 500,
        status: "fail"
    },
    {
        name: "Pranjal",
        marks: 900,
        status: "pass"
    },
    {
        name: "Bob",
        marks: 100,
        status: "fail"
    },
    {
        name: "Hari",
        marks: 550,
        status: "fail"
    },
    {
        name: "Shyam",
        marks: 600,
        status: "pass"
    },
    {
        name: "Laxman",
        marks: 300,
        status: "fail"
    }
]

const db = datas.filter((obj) => {
    return obj.name.endsWith("sh") && obj.status == "pass" && obj.marks > 500
})

console.log(db)