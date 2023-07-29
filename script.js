"use strict"

const formItem = document.querySelector('.form');
const todoBtn = document.querySelector('.createBtn');
const todoList = document.querySelector('.todo-list');
const todoInput = document.getElementById('todoInput');

todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);



function addTodo(e) {
   e.preventDefault();
   let val = todoInput.value;
   
   const todoDiv = document.createElement('div');
   todoList.appendChild(todoDiv);

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
   console.log(e.target);
   const item = e.target;

   if (item.classList[0] === "trash-btn") {
      const todo = item.parentElement;
      todo.classList.add("fall");
      todo.addEventListener("transitionend", function() {
         todo.remove();
      });
   }

   if (item.classList[0] === "complete-btn") {
      const todo = item.parentElement;
      todo.classList.toggle("completed");
   }
};
