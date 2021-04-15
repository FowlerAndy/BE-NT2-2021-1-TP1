const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let contadorTareas = 0
let contadorTareasPorHacer = 0

itemCountSpan.innerHTML = contadorTareas
uncheckedCountSpan.innerHTML = contadorTareasPorHacer


function addTodo() {
  // alert('Boton Add TODO clickeado!')
  let todo = prompt('Ingrese una tarea')
     
  if (todo){
    itemCountSpan.innerHTML = ++contadorTareas
    uncheckedCountSpan.innerHTML = ++contadorTareasPorHacer

    const text = document.createTextNode(todo);
    const newTarea = document.createElement('label');
    newTarea.setAttribute('class', classNames.TODO_TEXT);
    newTarea.appendChild(text);

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('onclick', 'eliminar()');
    deleteButton.setAttribute('class', classNames.TODO_DELETE);
    deleteButton.innerText = 'ELiminar tarea';

    const item = document.createElement('li');
    item.setAttribute('class', classNames.TODO_ITEM);
    item.appendChild(newTarea);
    item.appendChild(deleteButton);
    

    list.appendChild(item);

    
  }
}

function eliminar() {
  alert('Tarea Eliminada')
} 