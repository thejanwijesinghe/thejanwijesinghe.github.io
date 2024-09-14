let tasks = {
    inbox: [],
    work: [],
    personal: [],
    shopping: [],
  };
  
  let currentList = 'inbox';
  
  // Add new task
  document.getElementById("new-task-btn").addEventListener("click", () => {
    const taskText = prompt("Enter your task:");
    if (taskText) {
      tasks[currentList].push({
        text: taskText,
        completed: false,
        priority: 'none',
        deadline: null,
      });
      renderTasks();
    }
  });
  
  // Render tasks
  function renderTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = '';
    
    tasks[currentList].forEach((task, index) => {
      const taskItem = document.createElement("li");
      taskItem.textContent = task.text;
      taskList.appendChild(taskItem);
      
      // Task actions like editing and deleting can be added here
    });
  }
  
  // Switch between lists
  document.querySelectorAll(".list-item").forEach(listItem => {
    listItem.addEventListener("click", (e) => {
      currentList = e.target.id;
      document.querySelectorAll(".list-item").forEach(item => item.classList.remove("active"));
      e.target.classList.add("active");
      document.getElementById("list-title").textContent = currentList.charAt(0).toUpperCase() + currentList.slice(1);
      renderTasks();
    });
  });
  