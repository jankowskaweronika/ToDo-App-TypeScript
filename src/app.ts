import { Category, Task } from "./types/types";
import renderTasks from "./helpers/render-tasks.helper.js";
import { render as renderCategories } from "./helpers/render-categories.helper.js";

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement = document.querySelector(".categories");

let selectedCategory: Category;

const categories: Category[] = ["general", "work", "gym", "hobby"];

const tasks: Task[] = [
  {
    name: "Wyrzucić śmieci",
    done: true,
  },
  {
    name: "Pojść na spacer",
    done: false,
    category: "gym"
  },
  {
    name: "Nakarmić psy",
    done: false,
    category: "work"
  },
];

const addTask = (task: Task) => {
  tasks.push(task);
};

addButtonElement.addEventListener("click", (event: Event) => {
  event.preventDefault();
  addTask({ 
    name: taskNameInputElement.value, 
    done: false, 
    category: selectedCategory, 
  });
  renderTasks(tasks, tasksContainerElement)
});

addTask({ name: "pojeździć konno", category: "hobby", done: false});
renderCategories(categories, categoriesContainerElement, selectedCategory);
renderTasks(tasks, tasksContainerElement);
