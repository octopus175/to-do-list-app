import '../style/TaskItem.css'
import {ObjectId} from 'mongodb';

type ItemType = {
    _id: ObjectId,
    task_name: string,
    deadline: Date,
    completed: boolean,
    _v: number
  }

type TaskItemProps = {
    taskItem: ItemType,
    taskIndex: number,
    deleteTaskItem: Function,
    completeTaskItem: Function
}

const TaskItem = ({taskItem, taskIndex, deleteTaskItem, completeTaskItem}: TaskItemProps): JSX.Element => {

    const deadline = taskItem.deadline.toString().replace('T',' ').replace('Z',' ').split('.')[0];

    return(
        <>
            <span className='task-name' style={{ textDecoration: taskItem.completed ? "line-through" : "" }}>{taskItem.task_name}</span>
            {taskItem.completed ? (<span className='task-status'>Complete</span>):(<span className='task-status'>In progess</span>)}
            <span className='task-deadline'>{deadline}</span>
            <div className='action-selector'>
                <button className="complete-button" onClick={() => completeTaskItem(taskIndex, taskItem._id)}>Complete</button>
                <button className='delete-button'>
                    <i className="bi bi-trash3" onClick={() => deleteTaskItem(taskIndex, taskItem._id)}></i>
                </button>
            </div>
        </>
        
    )
}

export default TaskItem