let val;

const list = document.querySelector('ul')
const ListItem = document.querySelector('li')

val = list
val = list.childNodes
val = list.childNodes[1]
val = list.childNodes[1].nodeName
val = list.childNodes[1].nodeType

val = list.children
val = list.children[1].children

val = list.firstChild
val = list.firstElementChild

val = list.lastChild
val = list.lastElementChild

val = list.childElementCount

val = ListItem.parentNode
val = ListItem.parentElement
val = ListItem.parentElement.parentElement

val = ListItem.nextSibling
val = ListItem.nextElementSibling
val = ListItem.nextElementSibling.nextElementSibling.previousElementSibling

console.log(val)