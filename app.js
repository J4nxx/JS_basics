const form = document.querySelector("form")
const taskInput = document.querySelector("#task")
//submit
form.addEventListener('submit', addTask)

function addTask(e){
    console.log(taskInput.value)
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(taskInput.value))
    li.className = 'collection-item'
    const a = document.createElement('a')
    a.appendChild(document.createTextNode('X'))
    a.className = 'blue-text text-darken-2 secondary-content'
    a.setAttribute('x')
    li.appendChild(a)
    //add to list
    const ul = document.querySelector('ul')
    ul.appendChild(li)
    taskInput.value = ''
    e.preventDefault()
}

