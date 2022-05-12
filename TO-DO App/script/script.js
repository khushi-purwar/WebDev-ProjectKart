


let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let noTasksMsg = document.querySelector(".no-tasks-message");
let tasksCount = document.querySelector(".tasks-count span ");
let tasksCompleted = document.querySelector(".tasks-completed span");
let count=0;
let finished=0;
window.onload = function () {
  theInput.focus();
};
theAddButton.onclick = function () {
  if (theInput.value === "") {
    alert("You should add a task");
  } else {
    noTasksMsg.remove();  
    let mainSpan = document.createElement("span");
    count++;  
    let textSpan=document.createElement("span")
    let deleteElement = document.createElement("span");
    let editElement = document.createElement("span");

   
    let text = document.createTextNode(theInput.value);
    
  
    let texting=document.createTextNode(theInput.value);
    let deleteText = document.createTextNode("Delete");
    let editText = document.createTextNode("Edit");
    console.log(texting);
   
    mainSpan.className = "task-box";

    textSpan.appendChild(texting);
    deleteElement.appendChild(deleteText);
    editElement.appendChild(editText);
    textSpan.className="texts"
    deleteElement.className = "delete";
    editElement.className="edit"
    mainSpan.appendChild(textSpan);
    mainSpan.appendChild(deleteElement);
    mainSpan.appendChild(editElement);
    tasksContainer.appendChild(mainSpan);
    theInput.value = "";
    theInput.focus();
    
    tasksCount.textContent=count;
    tasksCompleted.textContent=finished;
  }
};
document.addEventListener("click", function (e) {

  if (e.target.className == "delete") {
    count--;
    if(!e.target.classList.contains('finished')){
      finished--;
    }
    e.target.parentNode.remove();
  }
  if (e.target.classList.contains("task-box")) {
    e.target.classList.toggle("finished");
    if(e.target.classList.contains('finished')){
    	finished++;
    }else{
    	finished--;
    }
  }
  else if(e.target.className=="edit"){
    
    console.log("edit button pressed")
    theInput.value=e.target.previousElementSibling.previousSibling.innerHTML
    e.target.parentNode.remove();


  }
  tasksCount.textContent=count;
    tasksCompleted.textContent=finished;
});



