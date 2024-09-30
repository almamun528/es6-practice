const firstName = "Abdullah"
const lastName = "Al Mamun"
const age = 24
const height = 5.11

//print this into one single line

const result = firstName + " "+ lastName + " " + "My age is "+ age + " my Height is"+ " "+ height
// console.log(result)
//! to do this it is very painful and hard to understand 
//! solution is using Backtick which is called template Literal

//? lets make it with a simple way with template string 

const result2 = `${firstName} ${lastName} my age is ${age} my height is ${height}`
// console.log(result2)

//* lets make a sentence from an object 

 let obj = {
    name : 'Mamun',
    school : "kamarjury",
    subject:['math',"history","business studies"],
    teacher:{
        math: "jakir sir",
        history: ' Hasina Maam',
    }
 }
 let sent = `My name is ${obj.name}. I read in ${obj.school}, my subjects are ${obj.subject}.
My math teacher is ${obj.teacher.math}`
console.log(sent)