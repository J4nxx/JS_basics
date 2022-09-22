let personID = 34;

if (personID === '34'){
    console.log('Id is not correct')
}  else {
    console.log(`id is ${personID}`)
}

console.log(personID)


/*const color = 'red'

if(color === 'red'){
    console.log('STOP!')
} else if(color === 'yellow'){
    console.log('Attention!')
} else if(color === 'green'){
    console.log('GO!')
} else {
    console.log('Eroor!')
}

/*

condition1 && condition2 - and
condition2  condition2 - or
 * */

const name = 'Kadi'
const age = 40

if(age > 0 && age<=12){
    console.log(`${name} on laps`)
} else if(age > 12 && age <18){
    console.log(`${name} on nooruk`)
} else {
    console.log(`${name} on taiskasvanu`)
}

let id = 5

if(id ===100){
    console.log('Ok')
} else {
    console.log('Not')
}

// ? - ternary
console.log(id ===100 ? 'Ok' : 'Not')

// switch
const color = 'red'

switch (color) {
    case "red":
        console.log('stop!')
        break;
    case "yellow":
        console.log('Attention!')
        break;
    case "green":
        console.log('Go!')
        break;
    default:
        console.log('Error!')
}


