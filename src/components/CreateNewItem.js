import { useState } from "react";
import '../style/CreateNewItem.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <Button variant="outline-dark" size='lg' onClick={() => {insertNewItem(taskName, taskDeadline); resetItemState()}}>Add task</Button>
        </div>
    )
}

export default CreateNewItem;