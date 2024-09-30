const numbers =[1,2,3,4,5,6,7]

// for(number of numbers){
//     console.log(number)
// }

// to do it in easy way is to Used || forEach and  map Methods

// numbers.forEach((number) => number)
// function show(a){
//     console.log(a+2);
// }
// ! forEach 
// numbers.forEach(show)
// numbers.forEach(number => {
//     console.log(number * 2)
// });


const result = numbers.forEach(number => {
        // console.log(number *2)
});
// console.log(numbers) // it will not change the main array 

// in this here we will get the outPut but if we want to store the value of forEach by declaring a variable 
//like result we are not able to do it. Because foEach Methods are not storing his value
// console.log(result)// we may find undefined 

//! Call Back function means one function is pass into another function.

// does the methods only give me access only the items of an array? and what call back function gives us ?
// it gives us 3 thing that is item,index,whole array from call back parameters
numbers.forEach((item,index,array) => {
    // console.log("item :",item, "index ", index, 'array: ',array)
})
// in this parameters the 1st parameters will gives us item of the array . second parameters gives us index and last one is whole array 


// ? map methods 
//! map methods is same as forEach but We can store the value of map 

    const array = [9,8,7,6,5,4,3,2,1]
    
    array.map((arr) =>{
        // console.log(arr)
    })


    const result1 = array.map((arr) => arr*2) 
// console.log(result1)
//! in this here we may find the map is store the whole value into the result1 variable 

//? does it change anything into main array ? Answer _ NO 
// console.log(array)// it will not change anything into new 