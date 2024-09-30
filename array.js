/**
 *! ArraySpreading ArraySpreading ArraySpreading ArraySpreading ArraySpreading ArraySpreading ArraySpreading 
 */
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

// console.log("this array is new array with out connection with others array", newArrayfromOld)
// console.log('old array - ',oldArray)



// console.log('new array is - ', newArray)



//! Mechanism of this [...] //const array2 = [...array] 

const array = [10,20,30,40,50,60]
const array3 = []
array.push(100)
    
for(items of array){
    array3.push(items)
}
// console.log(array3)


/**
 * !array Destructuring array Destructuring array Destructuring array Destructuring array Destructuring
 */

 const arrayNameOFStudent = ['Rony','Jony',"tony"]
 //how you can show the 3rd or 2nd student name?
 const secondName = arrayNameOFStudent[1]
//  console.log(secondName)
 const thirdName = (arrayNameOFStudent)[2]

 //* this is a hard process to get the elements. 

 //? easy way to get this is to use Destructuring

 const [firstStuendtname, secondStudentName,thirdStudentName] = arrayNameOFStudent
//  console.log(firstStuendtname)// get first student name
//  console.log(secondStudentName)// get second 

 //? what if we need to skip one or two 

 const [ , secondNameOfStudent, ] = arrayNameOFStudent

 console.log(secondNameOfStudent)

 //? this is how we can do Destructuring into an array and skip any item 
 
