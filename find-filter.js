//! find a number with is greater than 50 

const numbers = [2,10,40,42,60,50,51,55,56,90,200]

// let find = null; 

// for (let item of numbers) {
//     if (item > 50) {
//         find = item;
//         break;
//     }
// }

// console.log(find);
 //? this is the  Mechanism 

 //! let's do it with find methods 
    let result = numbers.find((item) => item >50)
// console.log(result);

//? find a number which is greater than 50 but number is odd
let findOddNumber = numbers.find((item)=>item>50 && item%2===1)
// console.log(findOddNumber)

//! NOTE: actually find returns 1st element of your target and store the value into your variable.
//! if he did not get your target then it will return Undefined 


//*filter methods 
//! find those number whose are greater than 5 
let number = [1,2,3,4,5,6,7,8,9,0]

const result2 = number.filter((i) => i>5)
// console.log(result2)

//find those number whose are grater than 5 and they are even 

let evenNumbers = number.filter((i)=> i>5 && i%2===0)
// console.log(evenNumbers)

//! filter methods work like they will give you all items from the array if it match with your condition.
// console.log(number)
//! it will not change it will not give your undefined like find, if your condition is not match 
//? it will provide you EMPTY array if your condition is not match 
//* example : find a number which is greater than 50, your biggest number is 9 into number variable 

let findGiggest = number.filter((find) => find >50)
console.log(findGiggest) // it returns empty array 





