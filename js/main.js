const input = document.querySelector(".form__input-input")
const formButton = document.querySelector(".form__button")
const taskList = document.querySelector(".task__list-list")
const taskNone = document.querySelector(".task__none-title")

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

})

taskList.addEventListener("click", function() {

    if (event.target.dataset.action === "delete") {

        const deleteTask = event.target.closest(".task")

        deleteTask.remove()

    }

    if (taskList.children.length === 0) {

        taskNone.classList.remove("none")

    }

})