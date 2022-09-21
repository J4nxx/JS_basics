const firstname = 'Janre'
const surname = 'Liiv'
const email = 'janre.liiv@khk.ee'
const department = 'IKT'

let result = '<ul>' +
    '<li>' + firstname + '</li>'
    '<li>' + surname + '</li>'
    '<li>' + email + '</li>'
    '<li> ' + department + '</li>'
    '</ul>'

result = '<ul>'
        <li><b>firstname: </b>${firstname}</li>
        <li><b>Surname: </b>${surname}</li>
        <li><b>Email: </b>${email}</li><
        <li><b>Department: </b>${department}</li>

console.log(result)
document.body.innterHTML = result