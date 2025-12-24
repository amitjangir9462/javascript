// const object1 ={}

// object1.name = "Amit"
// object1.age = 22
// object1.email = "amit@gmail.com"

// console.log(object1)


// const object1 = {
//     Name : "Amit",
//     age : 22,
//     City : {
//         State : "Rajasthan",
//         District :{
//             Tehsil : "Khetri",
//             Village : "Ramkumarpura"
//         }
//     }
// }

// console.log(object1.Name)
// console.log(object1.City.State)
// console.log(object1.City.District.Village)


const obj1 = {
    1 : "a",
    2 : "b",
    3 : "c"
}

// const obj2 = {
//     4 : "d",
//     5 : "e",
//     6 : "f"
// }

// const obj3 ={
//     7 : "g",
//     8 : "h",
//     9 : "i"
// }
// // const obj4 = Object.assign(obj1,obj2,obj3)

// // const obj4 = {...obj1,...obj2,...obj3}
// const obj4 = Object.assign({},obj1,obj2,obj3)
// console.log(obj4)


console.log(obj1)

console.log(Object.keys(obj1)) //interesting because output in Array []
console.log(Object.values(obj1)) // this is also in array
console.log(Object.entries(obj1)) // array
console.log(obj1.hasOwnProperty("1")) // true or false