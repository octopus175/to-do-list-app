import './App.css';
import React, {useEffect, useState} from "react";
import ToDoList from './components/ToDoList'
import Header from './components/Header';
import CreateNewItem from "./components/CreateNewItem";
import {ObjectId} from 'mongodb';
// @ts-ignore
import {getTasks, addTask, deleteTask, updateTask} from './services/taskServices';


type ItemType = {
  _id: ObjectId,
  task_name: string,
  deadline: Date,
  completed: boolean,
  _v: number
}

function App() {
  const [items, setItems] = useState<ItemType[]>([])

  const insertNewItem = async(newTaskName: string, newTaskDeadline: Date) => {
      const newItem = {task_name: newTaskName, deadline: newTaskDeadline};
      try {
        const result = await addTask(newItem);
        setItems(itemArr => itemArr.concat(result.data));
      } catch (error) {
        console.log(error)
      }
  }

  const deleteTaskItem = async(taskIndex: number, _id: string) => {
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

  const completeTaskItem = async(taskIndex: number, _id: string) => {
    const updatedItem = items[taskIndex];
    updatedItem.completed = true;
    try {
      const result = await updateTask(updatedItem);
      if (result.data._id === _id) {
        const newItemArr = [...items];
        newItemArr[taskIndex].completed = true;
        setItems(newItemArr);
      } else {
        console.log("return task id does not match");
      }
    } catch (error) {
      console.log(error)
    }

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
      {<ToDoList deleteTaskItem={deleteTaskItem} completeTaskItem={completeTaskItem} items={items}/>}
    </div>
  );
}

export default App;
