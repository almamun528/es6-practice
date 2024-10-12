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