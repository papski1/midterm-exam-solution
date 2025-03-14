class Task {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}

const tasks = [];

function addTask(name, description) {
    const id = tasks.length + 1;
    const newTask = new Task(id, name, description);
    tasks.push(newTask);
    console.log(`Task added: ${JSON.stringify(newTask)}`);
}

function viewTasks() {
    if (tasks.length === 0) {
        console.log('No tasks available.');
    } else {
        console.log('Tasks List:');
        tasks.forEach(task => console.log(`ID: ${task.id}, Name: ${task.name}, Description: ${task.description}`));
    }
}

function updateTask(id, name, description) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.name = name;
        task.description = description;
        console.log(`Task updated: ${JSON.stringify(task)}`);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}

function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        const deletedTask = tasks.splice(index, 1);
        console.log(`Task deleted: ${JSON.stringify(deletedTask[0])}`);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}

addTask('Midterm Exam', 'Working');
viewTasks();
deleteTask(1);

//after deletion
viewTasks();