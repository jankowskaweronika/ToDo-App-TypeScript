import { Category } from "./types/types.js";
import renderTasks from "./helpers/render-tasks.helper.js";
import { render as renderCategories } from "./helpers/render-categories.helper.js";
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
const categories = [
    Category.GENERAL,
    Category.GYM,
    Category.HOBBY,
    Category.WORK
];
const tasks = [
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
const addTask = (task) => {
    tasks.push(task);
};
//that function will be update our category
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({
        name: taskNameInputElement.value,
        done: false,
        category: selectedCategory,
    });
    renderTasks(tasks, tasksContainerElement);
});
addTask({ name: "pojeździć konno", category: Category.HOBBY, done: false });
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
renderTasks(tasks, tasksContainerElement);
