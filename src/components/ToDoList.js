import '../style/ToDoList.css'
import TaskItem from "./TaskItem.js";

function ToDoList ({deleteTaskItem, completeTaskItem, items}){
    
    function FieldName() {
        return(
          <div className='fieldname-container'>
    
            <span className="taskname-fieldname">Task name</span>
            <span className='other-fieldname'>Status</span>
            <span className='other-fieldname'>Deadline</span>
            <span className='action-fieldname'>Actions</span>
          </div>
        )
    }
    return(
        <div className='list-container'>
            <FieldName />
            {
                items.map((item, index) => {
                    return(
                        <TaskItem taskItem={item} key={index} taskId={index} completeTaskItem={completeTaskItem} deleteTaskItem={deleteTaskItem}/>
                    )
                    
                })
            }
        </div>
        
    )
}

export default ToDoList;