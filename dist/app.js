// <li>
//   <label for="task-1">Wyrzucić śmieci</label>
//   <input type="checkbox" id="task-1" name="Wyrzucić śmieci"/>
// </li>
const tasksContainerElement = document.querySelector(".tasks");
const tasks = ["Wyrzucić śmieci", "Pojść na spacer", "Nakarmić psy"];
const render = () => {
    tasks.forEach(task => {
        const taskElement = document.createElement("li");
        taskElement.innerText = task;
        tasksContainerElement.appendChild(taskElement);
    });
};
render();
