function ManagerSaid (name,callback){
    callback(name)
}

let sayHello =  function(name){
    console.log(`hello ${name}`)

}

let goodMorning = function(name){
    console.log(`Good Morning ${name}`)
}

ManagerSaid("Mamun" , sayHello )
ManagerSaid("Joynal" , goodMorning )


//! Calculation

// function calculate (number1,number2, callback){
//     callback(number1,number2)
// }

// let addition = function(num,num2){
//     result = num+num2
//     console.log("My Addition Result is ", result)
//     return result
// }

// calculate(20, 10 , addition )


//! odd or even checker 

function oddOrEvenNumber (number, callback){
    return callback(number)
}

let inputNumber = function(digite){
    console.log(digite + " is ",digite % 2 == 0 ? "Even Number" : "Odd Number")

}

oddOrEvenNumber(23 ,inputNumber )

