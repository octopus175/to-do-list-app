import React, {useState} from "react";
import Header from './Header.js';
import TaskItem from "./TaskItem.js";
import CreateNewItem from "./CreateNewItem.js";
function ToDoList (){
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
    return(
        <div>
            <Header />
            <CreateNewItem insertNewItem= {insertNewItem}/>
            <div>
                <span>Task name</span>
                <span>Status</span>
                <span>Deadline</span>
            </div>
            {
                items.map((item, index) => {
                    return(
                        <TaskItem taskItem={item} key={index} taskId={index} completeTaskItem={completeTaskItem}/>
                    )
                    
                })
            }
        </div>
        
    )
}

export default ToDoList;