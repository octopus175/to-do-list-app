import './App.css';
import React, {useState} from "react";
import ToDoList from './components/ToDoList.js'
import Header from './components/Header.js';
import CreateNewItem from "./components/CreateNewItem.js";

function App() {
  const [items, updateItems] = useState([])

  const insertNewItem = (newTaskName, newTaskDeadline) => {
      let newItem = {name: newTaskName, deadline: newTaskDeadline, isCompleted: false}
      updateItems(itemArr => itemArr.concat(newItem))
  }

  const deleteTaskItem = (taskId) => {
      const temp = [...items];
      temp.splice(taskId, 1);
      updateItems(temp);
  }

  const completeTaskItem = (taskId) => {
    const newItemArr = [...items];
    newItemArr[taskId].isCompleted = true;
    updateItems(newItemArr);
  }
  
  return (
    <div className="App">
      <Header />
      <CreateNewItem insertNewItem= {insertNewItem}/>
      <ToDoList insertNewItem={insertNewItem} deleteTaskItem={deleteTaskItem} completeTaskItem={completeTaskItem} items={items}/>
    </div>
  );
}

export default App;
