
const todoInput = document.querySelector(".todo__input");
const todoButton = document.querySelector(".todo__add");
const todoList = document.querySelector(".todo__list");
const todoClear = document.querySelector(".todo__clear");
const todoDoneAll = document.querySelector(".todo__done-all");

function addTodo(event){
	event.preventDefault();


	const todoContainer = document.createElement("div");
	todoContainer.classList.add("todo");


	const newTodo = document.createElement("li");
	newTodo.innerText = todoInput.value;
	newTodo.classList.add('todo__item');
	todoContainer.appendChild(newTodo);

	const completedButton = document.createElement("button");
	completedButton.innerHTML = '<button class="todo__done">done</button>';
	completedButton.classList.add('done');
	todoContainer.appendChild(completedButton);


	const trashButton = document.createElement('button');
	trashButton.innerHTML = '<button class="todo__delete">delete</button>';
	trashButton.classList.add('delete');
	todoContainer.appendChild(trashButton);

	todoList.appendChild(todoContainer);

	todoInput.value = ""
}

function deleteDone(e){
	const item = e.target;

	if (item.classList[0] === 'delete'){
		const todo = item.parentElement;
		todo.remove();
	}


	if (item.classList[0] === 'done'){
		const todo = item.parentElement;
		todo.classList.toggle("completed");
	}
}


function doneAll(event){
	event.preventDefault();
	 var dives = document.getElementsByClassName("todo")
        for (var i = 0; i < dives.length; i++){
            dives[i].classList.toggle("completed");
        }
}


function clearAll(event){
	event.preventDefault();
	 var dives = document.getElementsByClassName("todo")
        for (var i = 0; i < dives.length; i++){
            dives[i].remove();
        }
	}







todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteDone);
todoClear.addEventListener("click", clearAll);
todoDoneAll.addEventListener("click", doneAll);


