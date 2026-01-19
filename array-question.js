// [
//   { "_id": 2, "quantity": 5, "price": 25, "targetPrice": 100 },
//   { "_id": 1, "quantity": 10, "price": 15, "targetPrice": 120 },
//   { "_id": 3, "quantity": 6, "price": 35, "targetPrice": 100 },
//   { "_id": 4, "quantity": 5, "price": 55, "targetPrice": 150 },
//   { "_id": 5, "quantity": 5, "price": 55, "targetPrice": 150 }
// ]
// Creates a new array with all elements that pass the test implemented by the provided function
let arr11 = [
    { "_id": 1, "quantity": 10, "price": 15, "targetPrice": 120 },
    { "_id": 2, "quantity": 5, "price": 25, "targetPrice": 100 },
    { "_id": 3, "quantity": 6, "price": 35, "targetPrice": 100 },
    { "_id": 4, "quantity": 5, "price": 55, "targetPrice": 150 },
    { "_id": 5, "quantity": 5, "price": 55, "targetPrice": 150 }
];
let a = arr11.filter(value =>
    value.quantity > 5 &&
    value.price < 50 &&
    value.targetPrice > 50
);

console.log(a);


