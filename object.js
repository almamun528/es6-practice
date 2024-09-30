//? Object Spreading same as array Spreading Instead of [] this ti use {}. Because Object is {}. and Array is[]

const info ={
    name: "A.Al Mamun",
    age : 25,
    education : "BA in English",
    skill : "react and Node + Wordpress",
    contact : 'mrmamun@diu.edu.bd',
    MaritalStatus: false,
} 

const object2 = info
object2.age =30 //? both of changed
// object2.address = 'Gazipur Sadar'
// object2.name = "Hena"
// info.name = 'Mr mamun'
//! to solved this matter we have do disconnect the connection between them, By Spreading them. 

//?lets build another object from info 
const newInfo = {...info}
//* now lets change the value or key of them and see the output
info.name = "Abdullah"
info.MaritalStatus = true;
newInfo.name = "Habib hasan"
// console.log('object 1', info)
// console.log('obj 2' , object2)
// console.log('newInfo ',newInfo)




// ! object destructuring object destructuring object destructuring object destructuring object destructuring 

const cricketPlayer ={
    PlayerName : "Tamim Iqbal",
    age : 38,
    position : 'Opening Batting',
    isBalling:false,
    fitness: "best",

    averageRun :{
        test :100,
        T20: 64,
        OneDay:80,
    }
}

//? how can we access only his age and work with this 
// we have Option like
const age = cricketPlayer.age
// console.log(age)
//* this process is hard to get keys and values each time the better way is to Destructuring the object 

//? same as array we did but slightly different is we only can use those keys are already appears into the Object


const {PlayerName,fitness,position} = cricketPlayer
// console.log(position)
 
//? we want to change the key Name But how to to it? 

//Way is 
const {fitness:playerFitness} = cricketPlayer
// console.log(playerFitness)// in this here after : this colon we change the keyName and replace the new one.
// but it will not change into the main object. 
// ! nested object access from a nested object 
const {averageRun} = cricketPlayer
// console.log(averageRun)
const {test} = averageRun
// console.log(test)

//* another way to get anything from a nested object

//T20 run
const {averageRun:{T20}} = cricketPlayer
// console.log(T20)


//? object Access two ways one is Dot notation and another is bracket notation 

// console.log(cricketPlayer.averageRun.test) //?dot Notation
// console.log(cricketPlayer['averageRun']['T20'])
// ? into bracket Notation we have to use the keyName with string then I will work



//! optional Chaining Object 

const petCare = {
    name : "Mr Kabir Hossain",
    contact:  {
        phone:019490193,
        email: 'pethouse@gmai.com',
        location:"gazipur sadar",
    },
    pet :{
        petType: 'cat',
        info :{
            petName: 'Billu',
            foodHabit: 'fish and rice',
            color: 'black'
        },
    },
    keepPet :['dog',"cat", 'mongoes', 'birds']
}

// access the pet color 
// console.log(petCare.pet.info.color) // getting the color of the pet by dot notation 

// console.log(petCare['contact']['location'])// getting the location of petCare by bracket notation 


// ? access an object element which is absent or not able able like the *the petCare address 

// access the pet care age 
// console.log(petCare.address)// we may find undefined because this is absent.
// now we are going to access a element into address 
//? console.log(petCare.address.houseNo)// we are going to search or access an element which is not inside the object
// it will show us an error but why? because we are searching anything from an undefined.

//! to stop the error we may use Optional Chaining ?. by using this
// console.log(petCare?.address?.houseNo);
// by doing ?. this we my can stop error if the property is Undefined the code will not go ahead 

// access the cat from keepPet 
console.log(petCare.keepPet[0]);
// console.log(petCare['keepPet'][2]) // bracket notation 