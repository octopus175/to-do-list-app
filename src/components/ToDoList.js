import React, {useState} from "react";
import Header from './Header.js';
import TaskItem from "./TaskItem.js";
import CreateNewItem from "./CreateNewItem.js";
function ToDoList (){
    const demoItem = {
        name: "Install React",
        status: "pending",
        deadline: "02/08/2023 18:30:00"
    }
    const [items, updateItems] = useState([])

    const onCreateNewItem = (newTaskName, newTaskDeadline) => {
        let newItem = {name: newTaskName, deadline: newTaskDeadline, status: "New"}
        updateItems(items => items.concat(newItem))
        console.log(items)
    }

    return(
        <div>
            <Header />
            <CreateNewItem onCreateNewItem = {onCreateNewItem}/>
            <TaskItem {...demoItem}/>
            {
                items.map((item, index) => {
                    return(
                        <TaskItem {...item} key={index}/>
                    )
                    
                })
            }
        </div>
        
    )
}

export default ToDoList;