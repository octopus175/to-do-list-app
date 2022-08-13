import './App.css';
import React, {useState} from "react";
import ToDoList from './components/ToDoList.js'
import Header from './components/Header.js';
import CreateNewItem from "./components/CreateNewItem.js";

function App() {
  const [items, updateItems] = useState([])

  const insertNewItem = (newTaskName, newTaskDeadline) => {
      let newItem = {name: newTaskName, deadline: newTaskDeadline, status: "In progess"}
      updateItems(items => items.concat(newItem))
  }

  const completeTaskItem = (taskId) => {
      const temp = [...items];
      temp.splice(taskId, 1);
      updateItems(temp);
  }
  
  return (
    <div className="App">
      <Header />
      <CreateNewItem insertNewItem= {insertNewItem}/>
      {/*<FieldName />*/}
      <ToDoList insertNewItem={insertNewItem} completeTaskItem={completeTaskItem} items={items}/>
    </div>
  );
}

export default App;
