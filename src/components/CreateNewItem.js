import { useState } from "react";
import '../style/CreateNewItem.css';
import Button from 'react-bootstrap/Button';

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

    const onSubmitNewTask = () => {
        if (taskName === '' || taskDeadline === '') {
            window.alert("Item info incomplete");
        } else {
            insertNewItem(taskName, taskDeadline);
            resetItemState();
        }   
    }
    
    return (
        <div className="newitem-container">
            <input className="taskname-input" placeholder="Create new task" id="name" onChange={onTaskNameChange} value={taskName}></input>
            <input className="datetime-picker" type="datetime-local" id="deadline" onChange={onTaskDeadlineChange} value={(taskDeadline || '').toString().substring(0, 16)}></input>
            <Button variant="outline-dark" size='lg' onClick={() => {onSubmitNewTask()}}>Add task</Button>
        </div>
    )
}

export default CreateNewItem;