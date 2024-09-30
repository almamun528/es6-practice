
//! add all number with reduce 

let numbers = [1,2,3,4,5]

let add = numbers.reduce((previous, current) => previous+ current,0)
// console.log(add)

//! multiply all number 
let multi = numbers.reduce((previous,current) => previous*current,1)
// console.log(multi)


let object = [{a:10},{a:1},{a:14},{a:16}]
let totalAddition = object.reduce((previous,current)=> previous+current.a) 
// by doing dis we will not get the result that we deserved 
// here we are not giving any initial value thats why reduce methods start counting {a:10} with this.

console.log(totalAddition);

//Solution is to give initial value 
let totalAddition2 = object.reduce((previous,current) => previous+current.a, 0)//
// !in this here  current.a will go into the object and start calculation with 0 than go another to calculate.
console.log(totalAddition2 , "Numbers Are")
//? to solved this matter we need use initial value

//* multiply the number 
let multiply = object.reduce((previous, current) => )