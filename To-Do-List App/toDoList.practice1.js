
const toDoList = [
    {
    name:'travel',
    dueDate:'2024-09-30'
    },
    {
    name:'play piano',
    dueDate:'2024-09-30'
      }
      ];

rendertodolist();

function rendertodolist(){

    let toDoListHTML = '';

  toDoList.forEach((todoobject, index) => {
    
      //const name = todoobject.name; we can use destructuring instead.
      const {name, dueDate} = todoobject;
      //const DueDate = todoobject.DueDate; we can use destructuring instead.
     // const {DueDate} = todoobject; we can add it in the shortcut (destructuring)
      const html = `
      <div>${name}</div> 
      <div>${dueDate}</div>
      <button class="delete-button js-delete-button">Delete</button>`;
      toDoListHTML += html;
    
    });
     document.querySelector('.js-todo-list').innerHTML = toDoListHTML;
      document.querySelectorAll('.js-delete-button')
      .forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
          toDoList.splice(index, 1);
          rendertodolist();
        });
      })
    }

/*
for(let i = 0; i < toDoList.length; i++){
  const todoobject = toDoList[i];
  //const name = todoobject.name; we can use destructuring instead.
  const {name, dueDate} = todoobject;
  //const DueDate = todoobject.DueDate; we can use destructuring instead.
 // const {DueDate} = todoobject; we can add it in the shortcut (destructuring)
  const html = `
  <div>${name}</div> 
  <div>${dueDate}</div>
  <button onclick="
  toDoList.splice(${i}, 1);
  rendertodolist();
  " class="delete-button">Delete</button>`;
  toDoListHTML += html;

}
 document.querySelector('.js-todo-list').innerHTML = toDoListHTML;
} */
document.querySelector('.js-add-button').addEventListener('click', () => {
  addToDo();
});

function addToDo(){
const inputElement = document.querySelector('.js-name-input');
const name = inputElement.value;
const dateInputElement = document.querySelector('.js-due-date-input');
 const dueDate = dateInputElement.value;

toDoList.push({
   //name : name,
   //dueDate : dueDate we can use shorthand property instead. 
   name,
   dueDate 
});
dateInputElement.value = '';

rendertodolist();
}