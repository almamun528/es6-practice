
// this is an array 
const oldArray = [1,2,3,4,5,6]


//let's make a new array from old one.
const newArray = oldArray

// lets push a value into old array like 
oldArray.push(7)

//!we push a value into the oldArray but both array is getting the same value,
//!to solve this matter we have to break the connection between them. [...value] dot dot dot


//* lets make an array 
const newArrayfromOld = [...oldArray]

oldArray.push(1111) // this push will be found both of oldArray and new Array..
// but you dont find this push into newArrayfromOld this array //! [... we spread the array]

console.log("this array is new array with out connection with others array", newArrayfromOld)
console.log('old array - ',oldArray)



console.log('new array is - ', newArray)