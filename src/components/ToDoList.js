
import TaskItem from "./TaskItem.js";
function ToDoList ({completeTaskItem, items}){
    
    return(
        <div>
            
            <div>
                <span>Task name</span>
                <span>Status</span>
                <span>Deadline</span>
            </div>
            {
                items.map((item, index) => {
                    return(
                        <TaskItem taskItem={item} key={index} taskId={index} completeTaskItem={completeTaskItem}/>
                    )
                    
                })
            }
        </div>
        
    )
}

export default ToDoList;