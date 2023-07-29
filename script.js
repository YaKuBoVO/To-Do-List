"use strict"

const formItem = document.querySelector('.form');
const todoBtn = document.querySelector('.createBtn');
const todoList = document.querySelector('.todo-list');
const todoInput = document.getElementById('todoInput');
const filterOption = document.querySelector('.filter-todo');


todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);


function addTodo(e) {
   e.preventDefault();
   let val = todoInput.value;
   
   const todoDiv = document.createElement('div');
   todoList.appendChild(todoDiv);
   todoDiv.classList.add("todo");

   const todoItem = document.createElement('li');
   todoItem.id = "todoItem";
   todoDiv.appendChild(todoItem);


   const completedButton = document.createElement('button');
   completedButton.innerHTML = `<i class='bx bx-check'></i>`;
   todoDiv.appendChild(completedButton);
   completedButton.classList.add("complete-btn");


   const deleteBtn = document.createElement('button');
   deleteBtn.innerHTML = `<i class='bx bxs-trash'></i>`;
   deleteBtn.classList.add("trash-btn");
   todoDiv.appendChild(deleteBtn);
   

   todoItem.innerText = val;
   todoInput.value = "";
}


function deleteCheck(e) {
   const item = e.target;

   if (item.classList[0] === "trash-btn") {
      const todo = item.parentElement;
      todo.classList.add("fall");
      todo.addEventListener("transitionend", function (){
         todo.remove();
      });
   }

   if (item.classList[0] === "complete-btn") {
      const todo = item.parentElement;
      todo.classList.toggle("completed");
   }
};


function filterTodo(e) {
   const todoIst = todoList.childNodes;
   for(let i = 0; i < todoIst.length; i++) {
      let todo = todoIst[i];
      switch (e.target.value) {
         case "all":
            todo.style.display = "flex";
            break;
         case "completed":
            if(todo.classList.contains("completed")) {
               todo.style.display = "flex";
            }  else {
               todo.style.display = "none";
            }
            break;
         case "uncompleted":
            if(!todo.classList.contains("uncompleted")) {
               todo.style.display = "flex";
            }  else {
               todo.style.display = "none";
            }
            break;
      }
   }
}

