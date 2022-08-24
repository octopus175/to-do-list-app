import '../style/TaskItem.css'

function TaskItem({taskItem, taskId, deleteTaskItem, completeTaskItem}) {

    const deadline = taskItem.deadline.replace('T',' ').replace('Z',' ');

    return(
        <>
            <span className='task-name' style={{ textDecoration: taskItem.isCompleted ? "line-through" : "" }}>{taskItem.task_name}</span>
            {taskItem.completed ? (<span className='task-status'>Complete</span>):(<span className='task-status'>In progess</span>)}
            <span className='task-deadline'>{deadline}</span>
            <div className='action-selector'>
                <button className="complete-button" onClick={() => completeTaskItem(taskId)}>Complete</button>
                <button className='delete-button'>
                    <i className="bi bi-trash3" onClick={() => deleteTaskItem(taskId)}></i>
                </button>
            </div>
        </>
        
    )
}

export default TaskItem