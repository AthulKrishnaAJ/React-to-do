import React, {useState} from "react";
import './ToDoList.css'

function ToDoList () {

    const [tasks, setTasks] = useState(['Go to work']);
    const [newTask, setNewTask] = useState('')

    function handleInput (event) {
        setNewTask(event.target.value)
    }

    function addTask () {
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask])
            setNewTask("")
        }

    }

    function deleteTask (index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks)
    }

    return (
        <div className="container">
            <h1>To-Do-List</h1>

            <div className="inputContainer">
                <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInput}/>
                <button className="addBtn" onClick={addTask}>Add task</button>

                <ol>
                    {tasks.map((task, index) => 
                        <li key={index}>    
                            <span className="text">{task}</span>
                            <span onClick={() => deleteTask(index)}><i className="fa fa-trash deleteBtn" ></i></span>
                        </li>
                    )}
                </ol>
            </div>

        </div>
    )
}

export default ToDoList


