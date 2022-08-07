function TaskItem({taskItem, taskId, completeTaskItem}) {
    // TODO: add style

    return(
        <div>
            <span>{taskId}</span>
            <span>{taskItem.name}</span>
            <span>{taskItem.status}</span>
            <span>{taskItem.deadline}</span>
            <button onClick={() => completeTaskItem(taskId)}>check</button>
        </div>
        
    )
}

export default TaskItem