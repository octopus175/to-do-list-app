import './App.css';
import React, {useEffect, useState} from "react";
import ToDoList from './components/ToDoList.js'
import Header from './components/Header.js';
import CreateNewItem from "./components/CreateNewItem.js";
import {getTasks} from './services/taskServices.js';


function App() {
  const [items, setItems] = useState([])

  const insertNewItem = (newTaskName, newTaskDeadline) => {
      const newItem = {name: newTaskName, deadline: newTaskDeadline, isCompleted: false};
      setItems(itemArr => itemArr.concat(newItem));
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
