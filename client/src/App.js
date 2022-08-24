import './App.css';
import React, {useEffect, useState} from "react";
import ToDoList from './components/ToDoList.js'
import Header from './components/Header.js';
import CreateNewItem from "./components/CreateNewItem.js";
import {getTasks, addTask} from './services/taskServices.js';


function App() {
  const [items, setItems] = useState([])

  const insertNewItem = async(newTaskName, newTaskDeadline) => {
      const newItem = {task_name: newTaskName, deadline: newTaskDeadline};
      console.log("checking datetime format:", newTaskDeadline);
      try {
        const result = await addTask(newItem);
        setItems(itemArr => itemArr.concat(result.data));
      } catch (error) {
        console.log(error)
      }
  }

  const deleteTaskItem = (taskId) => {
      const newItemArr = [...items];
      newItemArr.splice(taskId, 1);
      setItems(newItemArr);
  }

  const completeTaskItem = (taskId) => {
    const newItemArr = [...items];
    newItemArr[taskId].isCompleted = true;
    setItems(newItemArr);
  }

  useEffect(() => {
    const getTaskItems = async() => {
      try {
        const result = await getTasks();
        setItems(result.data);
        console.log("returing result:", result.data);
      } catch (error) {
        console.log(error)
      }
    }

    console.log("running useEffect")
    getTaskItems()
  }, [setItems]);



  return (
    <div className="App">
      <Header />
      <CreateNewItem insertNewItem= {insertNewItem}/>
      {<ToDoList insertNewItem={insertNewItem} deleteTaskItem={deleteTaskItem} completeTaskItem={completeTaskItem} items={items}/>}
    </div>
  );
}

export default App;
