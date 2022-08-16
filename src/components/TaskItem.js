import '../style/TaskItem.css'

function TaskItem({taskItem, taskId, deleteTaskItem, completeTaskItem}) {

    const deleteStyle = {'fontSize': '2em'};
    const deadline = taskItem.deadline.replace('T',' ').replace('Z',' ');

    return(
        <div className="item-container">
            <span className='task-name' style={{ textDecoration: taskItem.isCompleted ? "line-through" : "" }}>{taskItem.name}</span>
            {taskItem.isCompleted ? (<span className='task-status'>Complete</span>):(<span className='task-status'>In progess</span>)}
            <span className='task-deadline'>{deadline}</span>
            <button className="complete-button" onClick={() => completeTaskItem(taskId)}>Complete</button>
            <button className='delete-button'>
                <i className="bi bi-trash3" style={deleteStyle} onClick={() => deleteTaskItem(taskId)}></i>
            </button>
            
        </div>
        
    )
}

export default TaskItem