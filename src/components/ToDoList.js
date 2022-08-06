import React from "react";
import Header from './Header.js';
import TaskItem from "./TaskItem.js";

function ToDoList (){
    const demoItem = {
        name: "Install React",
        status: "pending",
        deadline: "02/08/2023 18:30:00"
    }
    return(
        <div>
            <Header />
            <TaskItem {...demoItem}/>
        </div>
        
    )
}

export default ToDoList;