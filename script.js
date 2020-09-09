let inputField = document.getElementById('input');
let newListText;

inputField.addEventListener('keyup', function(event) {

  if (event.keyCode === 13 && inputField.value != "") {
    newListText = inputField.value;
    newListText = newListText.toUpperCase();
    inputField.value = "";
    let tag = document.createElement('p');
    tag.className="toDoText";
    let text = document.createTextNode(newListText);
    tag.appendChild(text);
    let div = document.getElementById('div');
    div.appendChild(tag);

    //Adds delete icon next to new to do item
    let times = document.createElement('i');
    times.className = "fa fa-times";
    tag.appendChild(times);
    times.onclick = function(e) {
      e.target.style.display = "none";
      tag.style.display = "none";
    }
    
    //Adds checkmark next to new to do item
    let checkmark = document.createElement('i');
    checkmark.className="fa fa-check-circle";
    tag.appendChild(checkmark);
    checkmark.onclick = function(e) {
      if (tag.style.textDecoration != "line-through") {
      tag.style.textDecoration = "line-through";
      checkmark.style.color = "white";
      } else {
        tag.style.textDecoration = "none";
        checkmark.style.color = "lightgreen";
      }
    }
}
});



































/*let todoItems = [];

function renderTodo(todo) {
  localStorage.setItem('todoItems', JSON.stringify(todoItems));

  const list = document.querySelector('.js-todo-list');
  const item = document.querySelector(`[data-key='${todo.id}']`);
  
  if (todo.deleted) {
    item.remove();
    if (todoItems.length === 0) list.innerHTML = '';
    return
  }

  const isChecked = todo.checked ? 'done': '';
  const node = document.createElement("li");
  node.setAttribute('class', `todo-item ${isChecked}`);
  node.setAttribute('data-key', todo.id);
  node.innerHTML = `
    <input id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.text}</span>
    <button class="delete-todo js-delete-todo">
    X
    </button>
  `;

  if (item) {
    list.replaceChild(node, item);
  } else {
    list.append(node);
  }
}

function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);
  renderTodo(todo);
}

function toggleDone(key) {
  const index = todoItems.findIndex(item => item.id === Number(key));
  todoItems[index].checked = !todoItems[index].checked;
  renderTodo(todoItems[index]);
}

function deleteTodo(key) {
  const index = todoItems.findIndex(item => item.id === Number(key));
  const todo = {
    deleted: true,
    ...todoItems[index]
  };
  todoItems = todoItems.filter(item => item.id !== Number(key));
  renderTodo(todo);
}

const form = document.querySelector('.js-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const input = document.querySelector('.js-todo-input');

  const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }
});

const list = document.querySelector('.js-todo-list');
list.addEventListener('click', event => {
  if (event.target.classList.contains('js-tick')) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }
  
  if (event.target.classList.contains('js-delete-todo')) {
    const itemKey = event.target.parentElement.dataset.key;
    deleteTodo(itemKey);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const ref = localStorage.getItem('todoItems');
  if (ref) {
    todoItems = JSON.parse(ref);
    todoItems.forEach(t => {
      renderTodo(t);
    });
  }
});*/