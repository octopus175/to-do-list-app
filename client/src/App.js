import './App.css';
import React, {useEffect, useState} from "react";
import ToDoList from './components/ToDoList.js'
import Header from './components/Header.js';
import CreateNewItem from "./components/CreateNewItem.js";
import {getTasks, addTask, deleteTask} from './services/taskServices.js';


function App() {
  const [items, setItems] = useState([])

  const insertNewItem = async(newTaskName, newTaskDeadline) => {
      const newItem = {task_name: newTaskName, deadline: newTaskDeadline};
      try {
        const result = await addTask(newItem);
        setItems(itemArr => itemArr.concat(result.data));
      } catch (error) {
        console.log(error)
      }
  }

  const deleteTaskItem = async(taskIndex, _id) => {
    const taskId = _id;
    try {
      const result = await deleteTask(taskId);
      if (result.data._id === items[taskIndex]._id) {
        const newItemArr = [...items];
        newItemArr.splice(taskIndex, 1);
        setItems(newItemArr);
      } else {
        console.error("error in deleting item, returing item does not match target item", result.data);
      }
      
    } catch (error) {
      console.log(error);
    }
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
      } catch (error) {
        console.log(error)
      }
    }

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
