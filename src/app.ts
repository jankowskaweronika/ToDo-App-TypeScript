const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");

const tasks: {
  name: string;
  done: boolean;
}[] = [
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

    const taskElement: HTMLElement = document.createElement("li");
    const id: string = `task-${index}`
    const labelElement: HTMLLabelElement = document.createElement("label")
    labelElement.innerText = task.name
    labelElement.setAttribute("for", id)

    const checkboxElement: HTMLInputElement = document.createElement("input")
    checkboxElement.type = "checkbox";
    checkboxElement.name = task.name;
    checkboxElement.id = id

    taskElement.appendChild(labelElement);
    taskElement.appendChild(checkboxElement)

    tasksContainerElement.appendChild(taskElement)
  });
};

const addTask = (taskName: string) => {
  tasks.push({ name: taskName, done: false });
};

addButtonElement.addEventListener("click", (event: Event) => {
  event.preventDefault(), addTask(taskNameInputElement.value), render();
});

render();
