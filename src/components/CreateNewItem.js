import { useState } from "react";

function CreateNewItem({onCreateNewItem}){
    const [taskName, setTaskName] = useState('');
    const [taskDeadline, setTaskDeadline] = useState('');

    const onTaskNameChange = e => {
        setTaskName(e.target.value);
    }
    
    const onTaskDeadlineChange = e => {
        
        if (!e.target['validity'].valid) return;
        const dt= e.target['value'] + ':00Z';
        setTaskDeadline(dt);
    }
    
    return (
        <div>
            <input placeholder="Create new task" id="name" onChange={onTaskNameChange}></input>
            <input type="datetime-local" id="deadline" onChange={onTaskDeadlineChange} value={(taskDeadline || '').toString().substring(0, 16)}></input>
            <button onClick={() => onCreateNewItem(taskName, taskDeadline)}>confirm</button>
        </div>
    )
}

export default CreateNewItem;