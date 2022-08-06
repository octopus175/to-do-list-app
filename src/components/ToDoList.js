import React from "react";
import Header from './Header.js';
import TaskItem from "./TaskItem.js";

function ToDoList (){
    return(
        <div>
            <Header />
            <TaskItem />
        </div>
        
    )
}

export default ToDoList;