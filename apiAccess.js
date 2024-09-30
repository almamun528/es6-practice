const people = [
    {
        id: 1,
        name: "John Doe",
        age: 30,
        occupation: "Software Engineer",
        contact: {
            email: "john.doe@example.com"
        },
        address: {
            street: "123 Main St",
            city: "San Francisco",
            state: "CA",
            zip: "94105"
        },
        social: {
            twitter: "@johndoe"
        },
        hobbies: ["Coding", "Hiking", "Photography"]
    },
    {
        id: 2,
        name: "Jane Smith",
        age: 25,
        occupation: "Graphic Designer",
        contact: {
            email: "jane.smith@example.com",
            phone: "987-654-3210"
        },
        hobbies: ["Drawing", "Traveling"]
    },
    {
        id: 3,
        name: "Mark Johnson",
        age: 40,
        occupation: "Marketing Manager",
        contact: {
            email: "mark.johnson@example.com",
            phone: "123-456-7890"
        },
        address: {
            street: "789 Oak St",
            city: "Chicago",
            state: "IL",
            zip: "60607"
        },
        hobbies: ["Running", "Golf"]
    }
];


const getNumber = people[1]?.contact?.phone
// console.log(getNumber) // get the phone number of 2nd person by dot notation 

// make a sentence with person name and city they live

people.map((person)=> {
    const sentence = `Person's name is ${person.name}. City: ${person?.address?.city || "N/A"}`
    // console.log(sentence)
})

//! find a person name whose age is 25 or above 

let searchAge = people.find((searchAge) => searchAge.age > 25)
// console.log(searchAge.name, searchAge.id)


const students = [
    {name: "mehedy bro",email: "mehedy@gamil.com",avg: 56,fiftyPercent: true,},
    { name: "rokib bro", email: "rokib@gamil.com", avg: 57, fiftyPercent: false },
    { name: "sakib bro", email: "sakib@gamil.com", avg: 42, fiftyPercent: false },
    { name: "sojib bro", email: "sojib@gamil.com", avg: 52, fiftyPercent: true },
    { name: "sunny bro", email: "sunny@gamil.com", avg: 32, fiftyPercent: false },
    { name: "saki bro", email: "sunny@gamil.com", avg: 37, fiftyPercent: true },
    {name: "jackie bro",email: "jackie@gamil.com",avg: 57,fiftyPercent: true,},
  ];

//   let selected = students.filter((goScic) => {
//     if(goScic.avg > 40 && goScic.fiftyPercent === true){
        // console.log(selected.name)
//         console.log(goScic.name)
//     }
//   });
const SCIC = students.filter((person)  => person.avg >= 48 && person.fiftyPercent)

    let studentSelectedName = SCIC.map((student) => student.name)
    console.log( studentSelectedName);

 