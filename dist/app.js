const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const tasks = [
    {
        name: "Wyrzucić śmieci",
        done: true,
    },
    {
        name: "Pojść na spacer",
        done: false,
    },
    {
        name: "Nakarmić psy",
        done: false,
    },
];
const render = () => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach((task, index) => {
        // <li>
        //   <label for="task-1">Wyrzucić śmieci</label>
        //   <input type="checkbox" id="task-1" name="Wyrzucić śmieci"/>
        // </li>
        const taskElement = document.createElement("li");
        const id = `task-${index}`;
        const labelElement = document.createElement("label");
        labelElement.innerText = task.name;
        labelElement.setAttribute("for", id);
        const checkboxElement = document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.name = task.name;
        checkboxElement.id = id;
        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkboxElement);
        tasksContainerElement.appendChild(taskElement);
    });
};
const addTask = (taskName) => {
    tasks.push({ name: taskName, done: false });
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault(), addTask(taskNameInputElement.value), render();
});
render();
