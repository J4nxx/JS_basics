const person = {
    firstname: = "Kadi",
    surname: "Tamm",
    age: 40,
    email: "kadi.tamm@gmail.com",
    hobbies: ["tennis", "korvapall"],
    address: {
      city: "Voru"
      county: "Vorumaa"
    },
    getBirthYear: function(){
        return 2022 - this.age
    }
}

let val
val = person
val = person.firstname
val = person.surname
val = person.getBirthYear()
val = person.hobbies[0]
val = person.city
val = person.address.city
val = person.address['city']
console.log(val)

for(let i = 0; i < person.hobbies.length; i++){
    console.log(person.hobbies[1])
}

person.hobbies.forEach(hobbie:string, index: number) => {
    console.log(hobbie)
}

