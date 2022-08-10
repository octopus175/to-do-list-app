import '../style/TaskItem.css'

function TaskItem({taskItem, taskId, completeTaskItem}) {

    const deadline = taskItem.deadline.replace('T',' ').replace('Z',' ');
    return(
        <div className="item-container">
            <span className='task-name'>{taskItem.name}</span>
            <span className='task-status'>{taskItem.status}</span>
            <span className='task-deadline'>{deadline}</span>
            <button className="complete-button" onClick={() => completeTaskItem(taskId)}>Complete</button>
        </div>
        
    )
}

export default TaskItem