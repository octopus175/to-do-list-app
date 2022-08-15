import { useState } from "react";
import '../style/CreateNewItem.css'

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
    const resetItemState = () => {
        setTaskName('');
        setTaskDeadline('');
    }
    
    return (
        <div className="newitem-container">
            <input className="taskname-input" placeholder="Create new task" id="name" onChange={onTaskNameChange} value={taskName}></input>
            <input className="datetime-picker" type="datetime-local" id="deadline" onChange={onTaskDeadlineChange} value={(taskDeadline || '').toString().substring(0, 16)}></input>
            <button className="btn btn-primary" onClick={() => {insertNewItem(taskName, taskDeadline); resetItemState()}}>confirm</button>
        </div>
    )
}

export default CreateNewItem;