//Reduce (higher order function)

// const num = [1, 2, 3, 4, 5]  
// const sum = num.reduce((acc,num)=>
//     {
//         return num + acc
//     },2)
// console.log(sum)


//add to cart feature in daraz using reduce
// const products = [
//     {
//         product: 'A',
//         price: 200,
//         qty: 2
//     },
//     {
//         product: 'B',
//         price: 300,
//         qty: 3
//     }, {
//         product: 'C',
//         price: 500,
//         qty: 7
//     }
// ]

// const cart = products.reduce((acc, add) => {
//     return add.price * add.qty + acc
// }, 0)
// console.log(cart)

// const cart = products.reduce((acc, add) => {
//     acc.Total = add.price * add.qty + acc.Total
//     acc.quantity = add.qty + acc.quantity
//     return acc
// }, { Total: 0, quantity: 0 })
// console.log(cart)

const reviews = [
    {
        Raiting: 2
    }, {
        Raiting: 5
    }, {
        Raiting: 6
    }
]
function revv(reviews) {
    const totalRating = reviews.reduce((acc, avg) => {
        return avg.Raiting + acc
    }, 0)
    const av = totalRating / reviews.length
    console.log(av)
}
revv(reviews)
