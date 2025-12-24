// const username = []
// if(username){
//     console.log("Hii")
// }
// else {
//     console.log("Bye")
// }



//Falsy 
// false,0 , -0 , BigInt 0n, "",NaN,undefined,null

// truthy
// [],{},function(){}," ","0","false",



// const obj1 = {}

// if(Object.keys(obj1).length ==0){
//     console.log("hii")
// }else{
//     console.log("Bye")
// }




//Nullish Coalescing Operator ??  null undefined

let val1 
// val1 = 5??10   //output is first value = 5

// val1 = null??10    // output is 10 because nullish safe output deta hai 
// val1 = undefined??10   // same as null 
val1 = null ?? 10 ?? 20  // output is first value = 10
console.log(val1)

