const tasks = document.getElementById('task__container')

function showTasks(taskContent){
    const task = document.createElement('div')
    task.classList.add("task")
    task.innerHTML = `
    <p>${taskContent}</p>
    <i class="fas fa-trash delete"></i>
    `

    tasks.appendChild(task)
}


const sendTasks = document.getElementById('formTasks')

sendTasks.addEventListener("submit", e => {
    e.preventDefault()
    const target = e.target

    const newTask = target.taskContent.value

    showTasks(newTask)
})

tasks.addEventListener("click", e => {
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove()
    }
})


