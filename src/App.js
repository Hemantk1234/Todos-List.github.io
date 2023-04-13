// Created By Hemant
import { useState, useEffect } from "react";
import AddTaskForm from "./components/AddTaskForm";
import UpdateForm from "./components/UpdateForm";
import ToDo from "./components/ToDo";
import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/reset.css';
import "./App.css";
import { Button} from 'antd';

function App() {
  //Task (Todo List) state
  //////////////////////////////////////////
  const [toDo, setToDo] = useState([]);
  //////////////////////////////////////////

  //Temp state
  //////////////////////////////////////////
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");
  //////////////////////////////////////////

  //Function to Add new task
  //////////////////////////////////////////
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };
  //////////////////////////////////////////

  //Function to Delete task
  //////////////////////////////////////////
  const deleteTask = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this task?');
    
    if (confirmed) {
      let newTask = toDo.filter((task) => task.id !== id);
      setToDo(newTask);
      
      setTimeout(() => {
        alert('Task deleted successfully!');
      }, 1000); // wait for 1 second before showing the alert
    }
  };
  //////////////////////////////////////////

  //Function to mark task as done or completed
  //////////////////////////////////////////
  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return ({ ...task, status: !task.status });
      }
      return task;
    })
    setToDo(newTask);
  };
  //////////////////////////////////////////

  //Function to cancel update task
  //////////////////////////////////////////
  const cancelUpdate = (id) => {
    setUpdateData("");
  };
  //////////////////////////////////////////

  //Function to change for update task
  //////////////////////////////////////////
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };
  //////////////////////////////////////////

  //Function to update task
  //////////////////////////////////////////
  const updateTask = (id) => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    setToDo(updatedObject);
    setUpdateData("");
  };
  //////////////////////////////////////////

  useEffect(() => {
    const data = localStorage.getItem("toDoList");
    if (data) {
      setToDo(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("toDoList", JSON.stringify(toDo));
  }, [toDo]);

  return (
    <div className="container App">
      <br />
      <br />
      <h2 className="text-center">To-Do Lists</h2>
      <Button type="link" href="https://app.algobulls.com">AlgoBulls.com</Button>
      <br />
      <br />

      {/* Update Tasks & Add Task*/}
      {updateData && updateData ? (
        <UpdateForm 
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}

      {/* Display ToDos */}

      {toDo && toDo.length ? "" : "No Task Available..."}

      <ToDo
        toDo={toDo}
        deleteTask={deleteTask} 
        markDone={markDone}
        setUpdateData={setUpdateData}
      />
    </div>
  );
}

export default App;
