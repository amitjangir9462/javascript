const arr1 = [1,2,3,4,5,6,7,8,9]

// const mul1 = arr1.map((num) =>num*10).map((num)=>num+1)
// console.log(mul1)

// let initialvalue =0;
// const sum = arr1.reduce((acc,curr)=>{
//     return acc + curr
// },0)
// console.log(sum)


const ar2  = [
    {
        itemName : "Book1",
        price : 699
    },
    {
        itemName : "Book2",
        price : 1389
    },
    {
        itemName: "Book3",
        price : 2099
    }
]

const priceToPay = ar2.reduce((acc,item) => {
     return acc + item.price
},0)
console.log(priceToPay)