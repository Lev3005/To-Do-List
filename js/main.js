const input = document.querySelector(".form__input-input")
const formButton = document.querySelector(".form__button")
const taskList = document.querySelector(".task__list-list")
const taskNone = document.querySelector(".task__none-title")

if (taskList.children.length <= 0) {

    taskNone.classList.remove("none")

}

formButton.addEventListener("click", function() {

    const formInput = input.value
    const taskHTML =   `<div class="task">
                            <span class="task__text">${formInput}</span>
                            <div class="task__buttons">
                                <button class="task__button" data-action="done">
                                    <img src="./img/max.png" class="task__button-img">
                                </button>
                                <button class="task__button" data-action="delete">
                                    <img src="./img/min.png" class="task__button-img">
                                </button>
                            </div>
                        </div>`

    taskList.insertAdjacentHTML("afterbegin", taskHTML)

    input.value = ""

    if (taskList.children.length > 0) {

        taskNone.classList.add("none")

    }

    saveLS()

})

taskList.addEventListener("click", function() {

    if (event.target.dataset.action === "delete") {

        const deleteTask = event.target.closest(".task")

        deleteTask.remove()

    }

    if (taskList.children.length === 0) {

        taskNone.classList.remove("none")

    }

    saveLS()

})

taskList.addEventListener("click", function() {

    if (event.target.dataset.action === "done") {

        const parentDone = event.target.closest(".task")
        const taskText = parentDone.querySelector(".task__text")

        taskText.classList.toggle("task__text-done")

    }

    saveLS()

})

function saveLS() {

    localStorage.setItem("tasksHTML", taskList.innerHTML)

}

if (localStorage.getItem("tasksHTML")) {

    taskList.innerHTML = localStorage.getItem("tasksHTML")
    
}