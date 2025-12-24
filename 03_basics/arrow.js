// const obj1 ={
//     name : "Amit",
//     age : 22,
//     welcomeMassage : function() {
//         console.log(`${this.name}`)
//         console.log(this)

//     }
// }
// console.log(this)




// const myfun = () =>{
//     const username = "Amit Jangir"
//     console.log(this.username)                 //undefined
// }
// myfun()       



// const myfun = () =>{
//     const username = "Amit Jangir"
//     console.log(this)                 // {}
// }
// myfun()          


// const sum = (num1,num2)=> num1 + num2

// console.log(sum(2,3))



const sum = (num1,num2)=> {
   return num1 + num2
}
console.log(sum(2,3))