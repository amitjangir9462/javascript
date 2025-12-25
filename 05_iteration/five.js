//Array iteration methods 



const arr = [1,2,3,4,5];

//forEach

// arr.forEach((num) =>{
//     console.log(num)
// })

//Map 

// arr.map((num)=>{
//     console.log(num)
// })

// const doubled = arr.map((num)=>num*2)
// console.log(doubled)


//filter 

// const evenNumber = arr.filter((num) => num%2===0)
// console.log(evenNumber)


//reduce

// const reduced=arr.reduce((total,num)=>{
//     return total + num

// },0)
// console.log(reduced)



//find

// const found = arr.find((num)=> num>3)
// console.log(found)

//some

// const sum = arr.some((num) => num>3)
// console.log(sum)


//every
// const every1 = arr.every((num)=>num>0)
// console.log(every1)




//for of 

// for (const element of arr) {
//     console.log(element)
    
// }




//object iteration 
const object1 ={
    name : "Amit",
    age : 22,
    gf : "EJ"
}


//for in
// for (const key in object1) {
    
//     console.log(key,object1[key])
    
    
// }


//object.keys

// Object.keys(object1).forEach(key =>{
//     console.log(key,object1[key])
// })

//obejct.values

// Object.values(object1).forEach(value =>{
//     console.log(value)
// })


//object.entries
// Object.entries(object1).forEach((key,value)=>{
//     console.log(key,value)
// })

//object.map

// Object.entries(object1).map((key,value)=>{
//     console.log(key,value)
// })





const arr1 = [
    {
        language : "Javascript",
        lan:"js"
    },
    {
        language : "java",
        lan:"jaav"
    },
    {
        language:"python",
        lan : "py"
    }
]
arr1.forEach((key)=>{
    console.log(key.language)
})