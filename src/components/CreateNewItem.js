import { useState } from "react";

function CreateNewItem({insertNewItem}){
    const [taskName, setTaskName] = useState('');
    const [taskDeadline, setTaskDeadline] = useState('');

    const onTaskNameChange = e => {
        setTaskName(e.target.value);
    }
    
    const onTaskDeadlineChange = e => {
        
        if (!e.target['validity'].valid) return;
        setTaskDeadline(e.target['value']);
    }
    
    return (
        <div>
            <input placeholder="Create new task" id="name" onChange={onTaskNameChange}></input>
            <input type="datetime-local" id="deadline" onChange={onTaskDeadlineChange} value={(taskDeadline || '').toString().substring(0, 16)}></input>
            <button onClick={() => insertNewItem(taskName, taskDeadline)}>confirm</button>
        </div>
    )
}

export default CreateNewItem;