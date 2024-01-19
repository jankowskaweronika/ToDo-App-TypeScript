import { Category, Task } from "./types/types.js";
import renderTasks from "./helpers/render-tasks.helper.js";
import { render as renderCategories } from "./helpers/render-categories.helper.js";

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement = document.querySelector(".categories");

let selectedCategory: Category;

const categories: Category[] = [
  Category.GENERAL, 
  Category.GYM, 
  Category.HOBBY, 
  Category.WORK
];

const tasks: Task[] = [
  {
    name: "Wyrzucić śmieci",
    done: true,
  },
  {
    name: "Pojść na spacer",
    done: false,
    category: Category.HOBBY,
  },
  {
    name: "Nakarmić psy",
    done: false,
    category: Category.GENERAL
  },
];

const addTask = (task: Task) => {
  tasks.push(task);
};

//that function will be update our category
const updateSelectedCategory = (newCategory: Category) => {
  selectedCategory = newCategory
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

addTask({ name: "pojeździć konno", category: Category.HOBBY, done: false});
renderCategories(
  categories, 
  categoriesContainerElement, 
  updateSelectedCategory
);
renderTasks(tasks, tasksContainerElement);
