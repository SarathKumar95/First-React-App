import "./App.css";
import React, { useState } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Task} from './Task'


function App() {
  const [todolist, setTodoList] = useState([]);

  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id :todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
      taskName : newTask,
      completed : false,
    };
    setTodoList([...todolist, task]);
  };

  const delTask = (id) => {
    setTodoList(
      todolist.filter((task) => task.id !== id
      )
    );
  };


  const completeTask = (id) => {
    setTodoList(
      todolist.map((task) => {
        if (task.id === id) {
          return {...task,completed:true};
        }
        else{
          return task;
        }
      })
    )
  }
  
  return (
    <div className="App mt-4">
    <React.Fragment>  
    <div className="to-do-Box">
      <h1 className="text-dark" style={{textDecoration:'underline'}}>To Do List</h1>
      <div className="AddTask">
        <input onChange={handleChange} className="m-1 input" placeholder="What's the task today ?"/>
        <button onClick={addTask} className="btn btn-sm btn-primary text-white mb-1">Add Task</button>
      </div>
      <div className="list">
        {todolist.map((task) => {
          return (
            <Task taskName={task.taskName} id= {task.id} completed = {task.completed} deleteTask = {delTask} compTask = {completeTask}/>
          );
        })}
      </div>
    </div>
    </React.Fragment>
    </div>    
  );
}

export default App;
