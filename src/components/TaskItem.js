import { useState } from 'react';
import '../style/TaskItem.css'

function TaskItem({taskItem, taskId, deleteTaskItem}) {

    const deleteStyle = {'fontSize': '2em'};

    const [taskStatus, setTaskStatus] = useState(false)

    const [nameStyle, setNameStyle] = useState({textDecoration: "none"})

    const deadline = taskItem.deadline.replace('T',' ').replace('Z',' ');
    return(
        <div className="item-container">
            <span className='task-name' style={nameStyle}>{taskItem.name}</span>
            {taskStatus?(<span className='task-status'>Complete</span>):(<span className='task-status'>In progess</span>)}
            <span className='task-deadline'>{deadline}</span>
            <button className="complete-button" onClick={() => {setNameStyle({textDecoration: "line-through"}); setTaskStatus(true)}}>Complete</button>
            <button className='delete-button'>
                <i className="bi bi-trash3" style={deleteStyle} onClick={() => deleteTaskItem(taskId)}></i>
            </button>
            
        </div>
        
    )
}

export default TaskItem