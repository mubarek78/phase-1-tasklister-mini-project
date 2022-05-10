document.addEventListener("DOMContentLoaded", () => {

  const formAll = document.getElementById("create-task-form");
  const field = document.getElementById("new-task-description");
  const button = document.querySelectorAll("input")[1];
  const priority = document.getElementById("dropdown");
  
  // assignments
  
  button.addEventListener("click", function(event) {
    const newListItem = document.createElement('li');
  
    
    //* Color picker
      if (priority.value === 'high') {
        newListItem.className = 'high'
      }  else if (priority.value === "low") {
        newListItem.className = 'low'
      } else {
        newListItem.className = "med";
      }
  
      
      //* Assign text to task and append
      newListItem.innerText = field.value;
      document.getElementById("tasks").appendChild(newListItem);
  
    //* Prevent default and remove
    event.preventDefault();
  
    newListItem.addEventListener("click", function() {
      newListItem.remove();
    })
  })
  
  });
