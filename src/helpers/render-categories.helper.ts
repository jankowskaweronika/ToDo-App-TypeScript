import { Category } from "../types/types.js";

const handleCategoryChange = (category: Category) => {
  if (category === Category.GENERAL) {
    console.log("nastąpiła zmiana")
  } else if (category === Category.GYM) {
    alert ("Lecisz na siłkę");
  } else if (category === Category.WORK) {
    console.log("praca popłaca");
  } else if (category === Category.HOBBY) {
    document.body.style.background = "red";
  } else {
    const never: never = category;
    console.log(never)
  }
}

export const render = (
  categories: Category[], 
  categoriesContainerElement: HTMLElement, 
  inputChangeCallback: (category: Category) => void
) => {
  categories.forEach((category) => {
   const categoryElement: HTMLElement = document.createElement("li");
 
   const radioInputElement: HTMLInputElement = document.createElement("input");
 
   radioInputElement.type = "radio";
   radioInputElement.name = "category";
   radioInputElement.value = category;
   radioInputElement.id = `category-${category}`;
   radioInputElement.addEventListener("change", () => {
     inputChangeCallback(category),
     handleCategoryChange(category)
   })
 
   const labelElement: HTMLLabelElement = document.createElement("label");
   labelElement.setAttribute("for", `category-${category}`);
   labelElement.innerText = category;
 
   categoryElement.appendChild(radioInputElement)
   categoryElement.appendChild(labelElement)
   categoriesContainerElement.appendChild(categoryElement);
  }); 
 };

